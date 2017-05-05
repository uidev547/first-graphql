export default function mongoProjection(info) {
    console.dir(info);
    const fieldNodes = info.fieldNodes[0];
    return fieldNodes.selectionSet.selections.reduce((projections, selection) => {
        projections[selection.name.value] = 1;
        return projections;
    }, {});
}
