import { Node } from '@simulation/DAGmap/Node'
import { NodeMap } from '@simulation/DAGmap/NodeMap'

export class NodeNavigator {
    private data: any //TODO Amélioration possible pour plus tard c'est de typer data.
    private readonly map: NodeMap

    //TODO Changer le updatede data, si on back plusieurs fois il y a des données fantomes dans data

    constructor(nodeMap: NodeMap) {
        this.data = {}
        this.map = nodeMap
    }

    getNode(nodeId: string): Node {
        return this.map.nodes[nodeId];
    }

    updateData(newData: any) {
        this.data = { ...this.data, ...newData }
    }

    private getNodePaths(nodeId: string) {
        return this.map.paths[nodeId];
    }

    getNodePathIds(nodeId: string): string[] {
        return this.getNodePaths(nodeId).map((path) => {
            return path.next
        })
    }

    canGoNext(nodeId: string, pathId: string): boolean {
        return this.getNodePaths(nodeId).some((path) =>
            path.next === pathId && (!path.condition || path.condition(this.data))
        );
    }

    getNextNodeId(nodeId: string): string {
        const children = this.map.paths[nodeId];
        const conditionPaths = children.filter(item => item.condition);
        const noConditionsPaths = children.filter(item => !item.condition);

        for (const conditionedChild of conditionPaths) {
            const condition = conditionedChild.condition;

            if (condition!()) {
                return conditionedChild.next;
            }
        }

        if (noConditionsPaths.length > 1) throw new Error("Paths are too ambiguous");

        return noConditionsPaths[0].next;
    }
}