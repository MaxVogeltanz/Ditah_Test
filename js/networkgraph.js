
        const nodes = [
            { id: "öaw", name: "ÖAW", category: "Organisationen", color: "#ba2a11" },
            { id: "TU Wien", name: "TU Wien", category: "Organisationen", color: "#ba2a11" },
            { id: "Innsbruck", name: "Uni IBK", category: "Organisationen", color: "#ba2a11" },
            { id: "Graz", name: "Uni Graz", category: "Organisationen", color: "#ba2a11" },
            { id: "Salzburg", name: "PLUS Salzburg", category: "Organisationen", color: "#ba2a11" },
            { id: "m3r.html", name: "M3R", category: "Methoden und Tools", year: 2023, color: "#009267" },
            { id: "fercan.html", name: "FERCAN", category: "Projekte", year: 2020, color: "#001267" },
            { id: "derla.html", name: "DERLA", category: "Projekte", year: 2020, color: "#001267" },
            { id: "Ficker", name: "LFE", category: "Projekte", year: 2020, color: "#001267" },

        ];

        const links = [
            { source: "TU Wien", target: "m3r.html" },
            { source: "Innsbruck", target: "Ficker" },
            { source: "Graz", target: "fercan.html" },
            { source: "Graz", target: "derla.html" },
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
                    d.x = Math.max(d.radius, Math.min(width - d.radius, d.x));
                    d.y = Math.max(d.radius, Math.min(height - d.radius, d.y));
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
            d.fx = null;
            d.fy = null;
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
            const showOrganisationen = d3.select("#filterOrganisationen").property("checked");
            const showProjekte = d3.select("#filterProjekte").property("checked");
            const timelineValue = +d3.select("#timeline").property("value");

            const filteredNodes = nodes.filter(node => {
                if (node.category === "Methoden und Tools" && !showMethodenTools) return false;
                if (node.category === "Organisationen" && !showOrganisationen) return false;
                if (node.category === "Projekte" && !showProjekte) return false;
                if (node.year > timelineValue) return false;
                return true;
            });

            const filteredLinks = links.filter(link => filteredNodes.some(node => node.id === link.source.id) && filteredNodes.some(node => node.id === link.target.id));
            simulation.nodes(filteredNodes).on("tick", ticked);
            simulation.force("link").links(filteredLinks);
            createNodes(filteredNodes);
            createLinks(filteredLinks);
            simulation.alpha(1).restart();
        }

        d3.select("#filterMethodenTools").on("change", updateGraph);
        d3.select("#filterOrganisationen").on("change", updateGraph);
        d3.select("#filterProjekte").on("change", updateGraph);
        d3.select("#timeline").on("input", function() {
            d3.select("#timelineValue").text(this.value);
            updateGraph();
        });