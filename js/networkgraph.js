
        const nodes = [
            /*3 basic nodes*/
            { id: "Infra", name: "Infrastruktur", category: "Säule", year: 2020, color: "#004567" },
            { id: "Methoden", name: "Methoden & Tools", category: "Säule", year: 2020, color: "#004567" },
            { id: "Wissenstransfer", name: "Wissenstransfer", category: "Säule", year: 2020, color: "#004567" },
            
            /*organisation nodes*/
            { id: "partner.html#oaw", name: "ÖAW", category: "Organisationen", color: "#660000", clickable: true},
            { id: "partner.html#tuw", name: "TU Wien", category: "Organisationen", color: "#660000", clickable: true},
            { id: "partner.html#ui", name: "Uni Innsbruck", category: "Organisationen", color: "#660000", clickable: true},
            { id: "partner.html#ug", name: "Uni Graz", category: "Organisationen", color: "#660000", clickable: true},
            { id: "partner.html#plus", name: "PLUS", category: "Organisationen", color: "#660000", clickable: true},
            { id: "cima.html", name: "CIMA", category: "Organisationen", color: "#660066" },
            { id: "partner.html#abk", name: "ABK", category: "Organisationen", color: "#660000", clickable: true},
            { id: "partner.html#krems", name: "UWK", category: "Organisationen", color: "#660000", clickable: true},
            { id: "partner.html#uw", name: "Uni Wien", category: "Organisationen", color: "#660000", clickable: true},
            { id: "partner.html#onb", name: "ÖNB", category: "Organisationen", color: "#660000", clickable: true},
            
            /*infrastructure-nodes*/
            { id: "https://gams.uni-graz.at", name: "GAMS", category: "Infrastruktur", color: "#666600", clickable: true},
            { id: "https://arche.acdh.oeaw.ac.at", name: "ARCHE", category: "Infrastruktur", color: "#666600", clickable: true},
            { id: "https://phaidra.univie.ac.at", name: "PHAIDRA", category: "Infrastruktur", color: "#666600", clickable: true},
            
            /*project nodes*/
            { id: "fercan.html", name: "FERCAN", category: "Projekte", year: 2020, color: "#006600", clickable: true},
            { id: "derla.html", name: "DERLA", category: "Projekte", category2: "MethodenTools", year: 2020, color: "#006600", clickable: true},
            { id: "ficker.html", name: "Ficker-Edition", category: "Projekte", year: 2020, color: "#006600", clickable: true},
            { id: "hps.html", name: "HPS", category: "Projekte", year: 2024, color: "#006600", clickable: true},
            { id: "gipse.html", name: "GIPSE", category: "Projekte", year: 2024, color: "#006600", clickable: true},
            { id: "digi16.html", name: "DIGI 16", category: "Projekte", year: 2024, color: "#006600", clickable: true},
            { id: "m3r.html", name: "M3R", category: "Projekte", category2: "MethodenTools", year: 2022, color: "#006600", clickable: true},
            { id: "patrimonium.html", name: "PATRIMONIUM", category: "Projekte", category2: "MethodenTools", year: 2023, color: "#006600", clickable: true},
            { id: "onbkulturerbe.html", name: "Kulturerbe", category: "Projekte", year: 2023, color: "#006600", clickable: true},
            { id: "textvsvisual.html", name: "Text vs Visual", category: "Projekte", year: 2023, color: "#006600", clickable: true},
            { id: "holzmeister.html", name: "Holzmeister", category: "Projekte", year: 2023, color: "#006600", clickable: true},
            { id: "fotodatenbank.html", name: "Fotodatenbank", category: "Projekte", year: 2023, color: "#006600", clickable: true},
            { id: "rnab.html", name: "RNAB", category: "Projekte", year: 2023, color: "#006600", clickable: true},
            { id: "dhlehre.html", name: "DH Lehre", category: "Projekte", year: 2023, color: "#006600", clickable: true},
            { id: "habsburg.html", name: "Habsburg", category: "Projekte", year: 2021, color: "#006600", clickable: true},
            { id: "dhplus.html", name: "DH Plus", category: "Projekte", color: "#006600", clickable: true},
            { id: "training.html", name: "training", category: "Projekte", color: "#006600", clickable: true},
            { id: "pez.html", name: "Dataset Pez", category: "Projekte", color: "#006600", clickable: true},
            { id: "clio.html", name: "Clio-Guide Austria", category: "Projekte", color: "#006600", clickable: true},
            { id: "newsuw.html", name: "Newsletter Archive", category: "Projekte", color: "#006600", clickable: true},

        ];

        const links = [
            { source: "Infra", target: "Methoden" },
            { source: "Infra", target: "Wissenstransfer" },
            
            { source: "Infra", target: "habsburg.html" },
            { source: "Infra", target: "https://phaidra.univie.ac.at" },
            { source: "Infra", target: "onbkulturerbe.html" },
            { source: "Infra", target: "rnab.html" },
            { source: "Infra", target: "fotodatenbank.html" },
            { source: "Infra", target: "holzmeister.html" },
            { source: "Infra", target: "ficker.html" },
            { source: "Infra", target: "digi16.html" },
            { source: "Infra", target: "pez.html" },
            
            { source: "Methoden", target: "Wissenstransfer" },
            
            { source: "Methoden", target: "ficker.html" },
            { source: "Methoden", target: "holzmeister.html" },
            { source: "Methoden", target: "gipse.html" },
            { source: "Methoden", target: "hps.html" },
            { source: "Methoden", target: "m3r.html" },
            { source: "Methoden", target: "patrimonium.html" },
            { source: "Methoden", target: "fercan.html" },
            { source: "Methoden", target: "derla.html" },
            { source: "Methoden", target: "onbkulturerbe.html" },
            { source: "Methoden", target: "rnab.html" },
            { source: "Methoden", target: "fotodatenbank.html" },
            { source: "Methoden", target: "digi16.html" },
            
            { source: "Wissenstransfer", target: "derla.html" },
            { source: "Wissenstransfer", target: "dhplus.html" },
            { source: "Wissenstransfer", target: "dhlehre.html" },
            { source: "Wissenstransfer", target: "habsburg.html" },
            { source: "Wissenstransfer", target: "onbkulturerbe.html" },
            { source: "Wissenstransfer", target: "clio.html" },
            { source: "Wissenstransfer", target: "newsuw.html" },
             
            { source: "Infra", target: "https://gams.uni-graz.at" },
            { source: "Infra", target: "https://arche.acdh.oeaw.ac.at" },
            { source: "Infra", target: "https://phaidra.univie.ac.at" },
            { source: "https://gams.uni-graz.at", target: "partner.html#ug" },
            { source: "https://arche.acdh.oeaw.ac.at", target: "partner.html#oaw" },
            
            { source: "partner.html#ug", target: "derla.html" },
            { source: "partner.html#ug", target: "hps.html" },
            { source: "partner.html#ug", target: "gipse.html" },
            { source: "partner.html#ug", target: "fercan.html" },
            { source: "partner.html#ug", target: "digi16.html" },
            { source: "partner.html#ug", target: "patrimonium.html" },
            { source: "partner.html#ug", target: "textvsvisual.html" },
            { source: "partner.html#ui", target: "ficker.html" },
            { source: "partner.html#ui", target: "holzmeister.html" },
            { source: "partner.html#ui", target: "fotodatenbank.html" },
            { source: "partner.html#ui", target: "rnab.html" },
            { source: "partner.html#uw", target: "https://phaidra.univie.ac.at" },
            { source: "partner.html#uw", target: "habsburg.html" },
            { source: "partner.html#uw", target: "dhlehre.html" },
            { source: "partner.html#uw", target: "pez.html" },
            { source: "partner.html#uw", target: "clio.html" },
            { source: "partner.html#uw", target: "newsuw.html" },
            { source: "cima.html", target: "partner.html#uw" },
            { source: "cima.html", target: "partner.html#krems" },
            { source: "cima.html", target: "partner.html#tuw" },
            { source: "cima.html", target: "partner.html#abk" },
            { source: "cima.html", target: "m3r.html" },
            { source: "partner.html#abk", target: "m3r.html" },
            { source: "partner.html#onb", target: "onbkulturerbe.html" },
            { source: "partner.html#plus", target: "dhplus.html" },
            { source: "partner.html#oaw", target: "training.html" },
            { source: "habsburg.html", target: "pez.html" },
            { source: "habsburg.html", target: "clio.html" },
            { source: "habsburg.html", target: "newsuw.html" },
            
            { source: "partner.html#tuw", target: "m3r.html" },
            { source: "partner.html#krems", target: "m3r.html" },
            
            { source: "patrimonium.html", target: "fercan.html" },
            { source: "m3r.html", target: "partner.html#uw" },

        ];

        const container = d3.select('.containerng');
const width = container.node().offsetWidth;
const height = container.node().offsetHeight;

const svg = d3.select("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet");

const graph = svg.select("#graph");

const color = d3.scaleOrdinal(d3.schemeCategory10);

// Calculate radius based on text width
function calculateRadius() {
    const tempText = svg.append("text")
        .attr("class", "temp-textng")
        .style("font", "12px sans-serif")
        .style("visibility", "hidden");

    nodes.forEach(node => {
        tempText.text(node.name);
        const bbox = tempText.node().getBBox();
        node.radius = bbox.width / 2 + 10;  // Add some padding
    });

    tempText.remove();
}

calculateRadius();

// Fix the position of the first three nodes
nodes[0].fx = width / 4;
nodes[0].fy = height / 2;
nodes[1].fx = width / 2;
nodes[1].fy = height / 4;
nodes[2].fx = (3 * width) / 4;
nodes[2].fy = height / 2;

const linkDistance = d => d.source.radius + d.target.radius + 20;

const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(linkDistance))
    .force("charge", d3.forceManyBody().strength(-1000))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide().radius(d => d.radius + 5));

const tooltip = d3.select("#tooltip");

function createLinks(linksData) {
    const link = graph.selectAll(".linkng")
        .data(linksData, d => `${d.source.id}-${d.target.id}`);

    link.exit().remove();

    link.enter().append("line")
        .attr("class", "linkng");

    link.merge(link);
}

function createNodes(nodesData) {
    const nodeGroup = graph.selectAll(".nodeng")
        .data(nodesData, d => d.id);

    nodeGroup.exit().remove();

    const enterNodes = nodeGroup.enter().append("g")
        .attr("class", "nodeng")
        .on("click", (event, d) => {
            if (d.clickable) {
                window.open(d.id, '_blank');
            }
    })
    .on("mouseover", (event, d) => {
        tooltip.style("opacity", 1)
            .html(d.name)
            .style("left", `${event.pageX + 5}px`)
            .style("top", `${event.pageY + 5}px`);
    })
    .on("mousemove", (event, d) => {
        tooltip.style("left", `${event.pageX + 5}px`)
            .style("top", `${event.pageY + 5}px`);
    })
    .on("mouseout", () => {
        tooltip.style("opacity", 0);
    })
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    enterNodes.append("circle")
        .attr("r", d => d.radius)
        .attr("fill", d => d.color); // Use the color property

    enterNodes.append("text")
        .attr("dy", 3)
        .attr("text-anchor", "middle")
        .text(d => d.name);

    nodeGroup.merge(enterNodes);
}

function ticked() {
    graph.selectAll(".linkng")
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    graph.selectAll(".nodeng")
        .attr("transform", d => {
            // Keep nodes within the container bounds
            if (!d.fx) { // Only constrain the position of non-fixed nodes
                d.x = Math.max(d.radius, Math.min(width - d.radius, d.x));
                d.y = Math.max(d.radius, Math.min(height - d.radius, d.y));
            }
            return `translate(${d.x},${d.y})`;
        });
}

function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    // Do not nullify fx and fy for fixed nodes
    if (d.id !== "Infra" && d.id !== "Methoden" && d.id !== "Wissenstransfer") {
        d.fx = null;
        d.fy = null;
    }
}

function applyZoomAndPan() {
    const zoom = d3.zoom()
        .scaleExtent([0.5, 3])
        .on('zoom', (event) => {
            graph.attr('transform', event.transform);
        });

    svg.call(zoom);
}

createLinks(links);
createNodes(nodes);
simulation.nodes(nodes).on("tick", ticked);
simulation.force("link").links(links);
applyZoomAndPan();

// Filter nodes based on checkbox state and timeline value
function updateGraph() {
    const showMethodenTools = d3.select("#filterMethodenTools").property("checked");
    const showInfrastruktur = d3.select("#filterInfrastruktur").property("checked");
    const showOrganisationen = d3.select("#filterOrganisationen").property("checked");
    const showProjekte = d3.select("#filterProjekte").property("checked");
    const timelineValue = +d3.select("#timeline").property("value");

    const filteredNodes = nodes.filter(node => {
        if (node.category === "Säule") return true; // Always show the three basic nodes with category "Säule"

        // Apply the OR logic for category 1, 2, 3
        // Every node can be inside up to 3 categories. depending on that checkbox filters will show or hide a node
        const categoryMatch = (node.category === "MethodenTools" && showMethodenTools) || 
                              (node.category === "Infrastruktur" && showInfrastruktur) ||
                              (node.category === "Organisationen" && showOrganisationen) || 
                              (node.category === "Projekte" && showProjekte);

        const category2Match = (node.category2 === "MethodenTools" && showMethodenTools) || 
                               (node.category2 === "Infrastruktur" && showMethodenTools) ||
                               (node.category2 === "Organisationen" && showOrganisationen) || 
                               (node.category2 === "Projekte" && showProjekte);
                               
        const category3Match = (node.category3 === "MethodenTools" && showMethodenTools) || 
                               (node.category3 === "Infrastruktur" && showMethodenTools) ||
                               (node.category3 === "Organisationen" && showOrganisationen) || 
                               (node.category3 === "Projekte" && showProjekte);
                               
        const category4Match = (node.category4 === "MethodenTools" && showMethodenTools) || 
                               (node.category4 === "Infrastruktur" && showMethodenTools) ||
                               (node.category4 === "Organisationen" && showOrganisationen) || 
                               (node.category4 === "Projekte" && showProjekte);

        if (!(categoryMatch || category2Match || category3Match || category4Match )) return false;

        if (node.year > timelineValue) return false;

        return true;
    });

    const filteredLinks = links.filter(link => filteredNodes.some(node => node.id === link.source.id) && filteredNodes.some(node => node.id === link.target.id));
    
    // Ensure fixed nodes stay fixed
    filteredNodes.forEach(node => {
        if (node.id === "Infra" || node.id === "Methoden" || node.id === "Wissenstransfer") {
            node.fx = node.x;
            node.fy = node.y;
        }
    });

    simulation.nodes(filteredNodes).on("tick", ticked);
    simulation.force("link").links(filteredLinks);
    createNodes(filteredNodes);
    createLinks(filteredLinks);
    simulation.alpha(1).restart();
}

d3.select("#filterMethodenTools").on("change", updateGraph);
d3.select("#filterInfrastruktur").on("change", updateGraph);
d3.select("#filterOrganisationen").on("change", updateGraph);
d3.select("#filterProjekte").on("change", updateGraph);
d3.select("#timeline").on("input", function() {
    d3.select("#timelineValue").text(this.value);
    updateGraph();
});
