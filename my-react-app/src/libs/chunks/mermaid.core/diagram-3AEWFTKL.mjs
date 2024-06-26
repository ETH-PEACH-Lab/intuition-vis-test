import {
  populateCommonDb
} from "./chunk-WSGK5HCH.mjs";
import {
  cleanAndMerge
} from "./chunk-CPAUJB3U.mjs";
import {
  selectSvgElement
} from "./chunk-FKHXDW44.mjs";
import {
  __name,
  clear,
  configureSvgSize,
  defaultConfig_default,
  getAccDescription,
  getAccTitle,
  getConfig,
  getDiagramTitle,
  log,
  setAccDescription,
  setAccTitle,
  setDiagramTitle
} from "./chunk-HYS3XFRJ.mjs";

// src/diagrams/visslides/db.ts
var defaultVisSlidesData = [];
var data = [...defaultVisSlidesData];
var DEFAULT_VISSLIDES_CONFIG = defaultConfig_default.visslides;
var getConfig2 = /* @__PURE__ */ __name(() => {
  return cleanAndMerge({
    ...DEFAULT_VISSLIDES_CONFIG,
    ...getConfig().visslides
  });
}, "getConfig");
var getPages = /* @__PURE__ */ __name(() => data, "getPages");
var addPage = /* @__PURE__ */ __name((page) => {
  data.push(page);
}, "addPage");
var clear2 = /* @__PURE__ */ __name(() => {
  clear();
  data = [...defaultVisSlidesData];
}, "clear");
var db = {
  getPages,
  addPage,
  getConfig: getConfig2,
  clear: clear2,
  setAccTitle,
  getAccTitle,
  setDiagramTitle,
  getDiagramTitle,
  getAccDescription,
  setAccDescription
};

// src/diagrams/visslides/parser.ts
import { parse } from "@mermaid-js/parser";
var populate = /* @__PURE__ */ __name((ast) => {
  populateCommonDb(ast, db);
  for (const page of ast.pages) {
    const subDiagrams = page.subDiagrams.map((subDiagram) => {
      if ("elements" in subDiagram) {
        return {
          elements: subDiagram.elements.map((e) => ({
            value: e.value,
            arrow: e.arrow ? true : void 0,
            context: e.context,
            color: e.color
          })),
          showIndex: subDiagram.showIndex ? true : void 0
        };
      } else {
        return {
          rows: subDiagram.rows.map((row) => ({
            elements: row.elements.map((e) => ({
              value: e.value,
              color: e.color
            }))
          }))
        };
      }
    });
    db.addPage({ subDiagrams });
  }
}, "populate");
var parser = {
  parse: async (input) => {
    const ast = await parse("visslides", input);
    log.debug(ast);
    populate(ast);
  }
};

// src/diagrams/visslides/drawArrayDiagram.ts
var drawArrayDiagram = /* @__PURE__ */ __name((svg, arrayDiagram, yOffset, config) => {
  const group = svg.append("g").attr("transform", `translate(0, ${yOffset})`);
  arrayDiagram.elements.forEach((element, index) => {
    drawElement(group, element, index, config, arrayDiagram.showIndex || false);
  });
}, "drawArrayDiagram");
var drawElement = /* @__PURE__ */ __name((svg, element, index, {
  elementColor,
  borderColor,
  borderWidth,
  labelColor,
  labelFontSize
}, showIndex) => {
  const group = svg.append("g");
  const elementX = index * 50 + 50;
  const elementY = 50;
  const fillColor = getColor(element.color);
  if (element.arrow) {
    const arrowYStart = elementY - 40;
    const arrowYEnd = elementY - 10;
    group.append("line").attr("x1", elementX + 20).attr("y1", arrowYStart).attr("x2", elementX + 20).attr("y2", arrowYEnd).attr("stroke", "black").attr("marker-end", "url(#arrowhead)");
    if (element.context) {
      group.append("text").attr("x", elementX + 20).attr("y", arrowYStart - 10).attr("fill", labelColor).attr("font-size", labelFontSize).attr("dominant-baseline", "hanging").attr("text-anchor", "middle").attr("class", "arrowContext").text(element.context);
    }
  }
  group.append("rect").attr("x", elementX).attr("y", elementY).attr("width", 40).attr("height", 40).style("fill", fillColor).attr("stroke", borderColor).attr("stroke-width", borderWidth).attr("class", "arrayElement");
  group.append("text").attr("x", elementX + 20).attr("y", elementY + 20).attr("fill", labelColor).attr("font-size", labelFontSize).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "elementLabel").text(element.value);
  if (showIndex) {
    group.append("text").attr("x", elementX + 20).attr("y", elementY + 60).attr("fill", labelColor).attr("font-size", 25).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "indexLabel").text(index);
  }
}, "drawElement");
var getColor = /* @__PURE__ */ __name((color) => {
  switch (color) {
    case "blue":
      return "rgba(0, 0, 255, 0.3)";
    case "green":
      return "rgba(0, 255, 0, 0.3)";
    case "red":
      return "rgba(255, 0, 0, 0.3)";
    default:
      return "none";
  }
}, "getColor");

// src/diagrams/visslides/drawMatrixDiagram.ts
var drawMatrixDiagram = /* @__PURE__ */ __name((svg, matrixDiagram, yOffset, config) => {
  const group = svg.append("g").attr("transform", `translate(0, ${yOffset})`);
  matrixDiagram.rows.forEach((row, rowIndex) => {
    row.elements.forEach((element, colIndex) => {
      drawElement2(group, element, rowIndex, colIndex, config);
    });
  });
}, "drawMatrixDiagram");
var drawElement2 = /* @__PURE__ */ __name((svg, element, rowIndex, colIndex, {
  borderColor,
  borderWidth,
  labelColor,
  labelFontSize
}) => {
  const group = svg.append("g");
  const elementX = colIndex * 50 + 50;
  const elementY = rowIndex * 50 + 50;
  const fillColor = getColor2(element.color);
  group.append("rect").attr("x", elementX).attr("y", elementY).attr("width", 40).attr("height", 40).style("fill", fillColor).attr("stroke", borderColor).attr("stroke-width", borderWidth).attr("class", "matrixElement");
  group.append("text").attr("x", elementX + 20).attr("y", elementY + 20).attr("fill", labelColor).attr("font-size", labelFontSize).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "elementLabel").text(element.value.toString());
}, "drawElement");
var getColor2 = /* @__PURE__ */ __name((color) => {
  switch (color) {
    case "blue":
      return "rgba(0, 0, 255, 0.3)";
    case "green":
      return "rgba(0, 255, 0, 0.3)";
    case "red":
      return "rgba(255, 0, 0, 0.3)";
    default:
      return "none";
  }
}, "getColor");

// src/diagrams/visslides/renderer.ts
var draw = /* @__PURE__ */ __name((_text, id, _version, diagram2) => {
  const db2 = diagram2.db;
  const config = db2.getConfig();
  const pages = db2.getPages();
  const title = db2.getDiagramTitle();
  const svgHeight = 800;
  const svgWidth = 600;
  const svg = selectSvgElement(id);
  let currentPage = 0;
  const renderPage = /* @__PURE__ */ __name((pageIndex) => {
    svg.selectAll("g.page").attr("display", "none");
    svg.select(`#page${pageIndex}`).attr("display", "inline");
    svg.select("#prevButton").attr("fill", pageIndex > 0 ? "#007bff" : "#c0c0c0");
    svg.select("#nextButton").attr("fill", pageIndex < pages.length - 1 ? "#007bff" : "#c0c0c0");
  }, "renderPage");
  const addNavigationButtons = /* @__PURE__ */ __name((svg2, totalPages) => {
    const buttonGroup = svg2.append("g").attr("class", "navigation-buttons");
    const prevButtonGroup = buttonGroup.append("g").attr("id", "prevButtonGroup").attr("cursor", "pointer");
    prevButtonGroup.append("rect").attr("id", "prevButton").attr("x", 10).attr("y", svgHeight - 40).attr("width", 60).attr("height", 30).attr("fill", "#c0c0c0");
    prevButtonGroup.append("text").text("Prev").attr("x", 40).attr("y", svgHeight - 20).attr("fill", "white").attr("text-anchor", "middle").attr("alignment-baseline", "middle");
    const nextButtonGroup = buttonGroup.append("g").attr("id", "nextButtonGroup").attr("cursor", "pointer");
    nextButtonGroup.append("rect").attr("id", "nextButton").attr("x", svgWidth - 70).attr("y", svgHeight - 40).attr("width", 60).attr("height", 30).attr("fill", "#007bff");
    nextButtonGroup.append("text").text("Next").attr("x", svgWidth - 40).attr("y", svgHeight - 20).attr("fill", "white").attr("text-anchor", "middle").attr("alignment-baseline", "middle");
    prevButtonGroup.node()?.addEventListener("click", () => {
      if (currentPage > 0) {
        currentPage -= 1;
        renderPage(currentPage);
      }
    });
    nextButtonGroup.node()?.addEventListener("click", () => {
      if (currentPage < totalPages - 1) {
        currentPage += 1;
        renderPage(currentPage);
      }
    });
  }, "addNavigationButtons");
  const drawPage = /* @__PURE__ */ __name((svg2, page, pageIndex) => {
    const pageGroup = svg2.append("g").attr("id", `page${pageIndex}`).attr("class", "page").attr("display", pageIndex === 0 ? "inline" : "none");
    if (title) {
      pageGroup.append("text").text(title).attr("x", svgWidth / 2).attr("y", 25).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "pageTitle");
    }
    let yOffset = 50;
    for (const subDiagram of page.subDiagrams) {
      if (subDiagram.elements) {
        drawArrayDiagram(pageGroup, subDiagram, yOffset, config);
        yOffset += 100;
      } else {
        drawMatrixDiagram(pageGroup, subDiagram, yOffset, config);
        yOffset += 200;
      }
    }
  }, "drawPage");
  svg.attr("viewBox", `0 0 ${svgWidth} ${svgHeight}`);
  configureSvgSize(svg, svgHeight, svgWidth, config.useMaxWidth);
  pages.forEach((page, index) => {
    drawPage(svg, page, index);
  });
  addNavigationButtons(svg, pages.length);
  renderPage(currentPage);
}, "draw");
var renderer = { draw };

// src/diagrams/visslides/styles.ts
var styles = /* @__PURE__ */ __name((options = {}) => {
  log.debug({ options });
  return `
    .element {
      font-size: ${options.array?.elementFontSize ?? "10px"};
      fill: ${options.array?.valueColor ?? "black"};
    }
    .element.index {
      fill: ${options.array?.indexColor ?? "black"};
    }
    .element {
      stroke: ${options.array?.elementStrokeColor ?? "black"};
      stroke-width: ${options.array?.elementStrokeWidth ?? "1"};
      fill: ${options.array?.elementFillColor ?? "#efefef"};
    }
  `;
}, "styles");

// src/diagrams/visslides/diagram.ts
var diagram = {
  parser,
  db,
  renderer,
  styles
};
export {
  diagram
};
