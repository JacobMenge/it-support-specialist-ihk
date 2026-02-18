/* Mermaid Dark Mode Integration
   Beobachtet den Theme-Wechsel und rendert Mermaid-Diagramme mit passendem Theme neu. */

(function () {
  var darkThemeVars = {
    primaryColor: "#1a2a5c",
    primaryTextColor: "#e0e0e0",
    primaryBorderColor: "#4a6fa5",
    lineColor: "#7a9ec9",
    secondaryColor: "#2a3f6c",
    tertiaryColor: "#1e1e2e",
    background: "#2b2b2b",
    mainBkg: "#1a2a5c",
    nodeBorder: "#4a6fa5",
    clusterBkg: "#1e1e2e",
    clusterBorder: "#4a6fa5",
    titleColor: "#e0e0e0",
    edgeLabelBackground: "#2b2b2b",
    nodeTextColor: "#e0e0e0"
  };

  function isDarkMode() {
    return document.body.getAttribute("data-md-color-scheme") === "slate";
  }

  /* Originalcode der Mermaid-Blöcke beim ersten Laden sichern */
  function saveMermaidSources() {
    document.querySelectorAll("pre.mermaid, .mermaid").forEach(function (el) {
      if (el.getAttribute("data-original-code")) return;
      var codeEl = el.querySelector("code");
      var src = codeEl ? codeEl.textContent : el.textContent;
      if (src && src.trim()) {
        el.setAttribute("data-original-code", src.trim());
      }
    });
  }

  function reRenderMermaid() {
    if (typeof mermaid === "undefined") return;

    var theme = isDarkMode() ? "dark" : "default";
    var vars = isDarkMode() ? darkThemeVars : {};

    mermaid.initialize({
      startOnLoad: false,
      theme: theme,
      themeVariables: vars
    });

    document.querySelectorAll("pre.mermaid, .mermaid").forEach(function (el) {
      var code = el.getAttribute("data-original-code");
      if (!code) return;

      /* SVG entfernen und Originalcode wiederherstellen */
      el.removeAttribute("data-processed");
      el.innerHTML = code;

      /* Neu rendern */
      try {
        mermaid.run({ nodes: [el] });
      } catch (e) {
        /* Fallback: nochmal versuchen */
        setTimeout(function () {
          try { mermaid.run({ nodes: [el] }); } catch (e2) { /* ignorieren */ }
        }, 200);
      }
    });
  }

  /* Theme-Wechsel über MutationObserver beobachten */
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.attributeName === "data-md-color-scheme") {
        setTimeout(reRenderMermaid, 150);
      }
    });
  });

  /* Initialisierung */
  function init() {
    observer.observe(document.body, { attributes: true });

    /* Warten bis Mermaid geladen und gerendert hat, dann Quellcode sichern */
    var checkInterval = setInterval(function () {
      var diagrams = document.querySelectorAll("pre.mermaid svg, .mermaid svg");
      if (diagrams.length > 0 || document.querySelectorAll("pre.mermaid, .mermaid").length === 0) {
        clearInterval(checkInterval);
        saveMermaidSources();

        /* Falls bereits im Dark Mode, sofort neu rendern */
        if (isDarkMode()) {
          setTimeout(reRenderMermaid, 100);
        }
      }
    }, 200);

    /* Timeout nach 5 Sekunden, falls Mermaid nie fertig wird */
    setTimeout(function () {
      clearInterval(checkInterval);
      saveMermaidSources();
      if (isDarkMode()) {
        setTimeout(reRenderMermaid, 100);
      }
    }, 5000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  /* Bei Instant-Loading (SPA-Navigation) von MkDocs Material */
  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      setTimeout(function () {
        saveMermaidSources();
        if (isDarkMode()) {
          setTimeout(reRenderMermaid, 300);
        }
      }, 500);
    });
  }
})();
