
        const nodes = [
            /*3 basic nodes*/
            { id: "Infra", name: "Infrastruktur", category: "Säule", color: "#004567" },
            { id: "Methoden", name: "Methoden & Tools", category: "Säule", year: 2020, color: "#004567" },
            { id: "Wissenstransfer", name: "Wissentransfer", category: "Säule", year: 2020, color: "#004567" },
            
            /*organisation nodes*/
            { id: "öaw", name: "ÖAW", category: "Organisationen", color: "#660000" },
            { id: "TU Wien", name: "TU Wien", category: "Organisationen", color: "#660000" },
            { id: "Innsbruck", name: "Uni Innsbruck", category: "Organisationen", color: "#660000" },
            { id: "unigraz", name: "Uni Graz", category: "Organisationen", color: "#660000" },
            { id: "plus", name: "PLUS", category: "Organisationen", color: "#660000" },
            { id: "Cima", name: "CIMA", category: "Organisationen", color: "#660066" },
            { id: "ABK", name: "ABK", category: "Organisationen", color: "#660000" },
            { id: "Uni Krems", name: "UWK", category: "Organisationen", color: "#660000" },
            { id: "Uni Wien", name: "Uni Wien", category: "Organisationen", color: "#660000" },
            { id: "onb", name: "ÖNB", category: "Organisationen", color: "#660000" },
            
            /*infrastructure-nodes*/
            { id: "https://gams.uni-graz.at", name: "GAMS", category: "Infrastruktur", color: "#666600" },
            { id: "https://arche.acdh.oeaw.ac.at", name: "ARCHE", category: "Infrastruktur", color: "#666600" },
            { id: "phaidra.html", name: "PHAIDRA", category: "Infrastruktur", category2: "Organisationen", color: "#666600" },
            
            /*project nodes*/
            { id: "fercan.html", name: "FERCAN", category: "Projekte", year: 2020, color: "#006600" },
            { id: "derla.html", name: "DERLA", category: "Projekte", category2: "MethodenTools", year: 2020, color: "#006600" },
            { id: "ficker.html", name: "Ficker-Edition", category: "Projekte", year: 2020, color: "#006600" },
            { id: "hps.html", name: "HPS", category: "Projekte", year: 2024, color: "#006600" },
            { id: "gipse.html", name: "GIPSE", category: "Projekte", year: 2024, color: "#006600" },
            { id: "digi16.html", name: "DIGI 16", category: "Projekte", year: 2024, color: "#006600" },
            { id: "m3r.html", name: "M3R", category: "Projekte", category2: "MethodenTools", year: 2022, color: "#006600" },
            { id: "patrimonium.html", name: "PATRIMONIUM", category: "Projekte", category2: "MethodenTools", year: 2023, color: "#006600" },
            { id: "onbkulturerbe.html", name: "Kulturerbe", category: "Projekte", year: 2023, color: "#006600" },
            { id: "textvsvisual.html", name: "Text vs Visual", category: "Projekte", year: 2023, color: "#006600" },
            { id: "holzmeister.html", name: "Holzmeister", category: "Projekte", year: 2023, color: "#006600" },
            { id: "fotodatenbank.html", name: "Fotodatenbank", category: "Projekte", year: 2023, color: "#006600" },
            { id: "rnab.html", name: "RNAB", category: "Projekte", year: 2023, color: "#006600" },
            { id: "dhlehre.html", name: "DH Lehre", category: "Projekte", year: 2023, color: "#006600" },
            { id: "habsburg.html", name: "Habsburg", category: "Projekte", year: 2021, color: "#006600" },
            { id: "dhplus.html", name: "DH Plus", category: "Projekte", color: "#660000" },

        ];

        const links = [
            { source: "Infra", target: "Methoden" },
            { source: "Infra", target: "Wissenstransfer" },
            
            { source: "Infra", target: "habsburg.html" },
            { source: "Infra", target: "phaidra.html" },
            { source: "Infra", target: "onbkulturerbe.html" },
            { source: "Infra", target: "rnab.html" },
            { source: "Infra", target: "fotodatenbank.html" },
            { source: "Infra", target: "holzmeister.html" },
            { source: "Infra", target: "ficker.html" },
            
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
            
            { source: "Wissenstransfer", target: "derla.html" },
            { source: "Wissenstransfer", target: "dhplus.html" },
            { source: "Wissenstransfer", target: "dhlehre.html" },
            { source: "Wissenstransfer", target: "habsburg.html" },
             { source: "Wissenstransfer", target: "onbkulturerbe.html" },
             
            { source: "Infra", target: "https://gams.uni-graz.at" },
            { source: "Infra", target: "https://arche.acdh.oeaw.ac.at" },
            { source: "Infra", target: "phaidra.html" },
            { source: "https://gams.uni-graz.at", target: "unigraz" },
            { source: "https://arche.acdh.oeaw.ac.at", target: "öaw" },
            
            { source: "unigraz", target: "derla.html" },
            { source: "unigraz", target: "hps.html" },
            { source: "unigraz", target: "gipse.html" },
            { source: "unigraz", target: "fercan.html" },
            { source: "unigraz", target: "digi16.html" },
            { source: "unigraz", target: "patrimonium.html" },
            { source: "unigraz", target: "textvsvisual.html" },
            { source: "Innsbruck", target: "ficker.html" },
            { source: "Innsbruck", target: "holzmeister.html" },
            { source: "Innsbruck", target: "fotodatenbank.html" },
            { source: "Innsbruck", target: "rnab.html" },
            { source: "Uni Wien", target: "phaidra.html" },
            { source: "Uni Wien", target: "habsburg.html" },
            { source: "Uni Wien", target: "dhlehre.html" },
            { source: "Cima", target: "Uni Wien" },
            { source: "Cima", target: "Uni Krems" },
            { source: "Cima", target: "TU Wien" },
            { source: "Cima", target: "ABK" },
            { source: "Cima", target: "m3r.html" },
            { source: "ABK", target: "m3r.html" },
            { source: "onb", target: "onbkulturerbe.html" },
            { source: "plus", target: "dhplus.html" },
            
            { source: "TU Wien", target: "m3r.html" },
            { source: "Uni Krems", target: "m3r.html" },
            
            { source: "patrimonium.html", target: "fercan.html" },
            { source: "m3r.html", target: "Uni Wien" },

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
            window.open(d.id, '_blank');
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