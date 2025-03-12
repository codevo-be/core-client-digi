import { Node } from '@simulation/DAGmap/Node'

export interface NodeMap {
    nodes: Record<string, Node>;
    paths: Record<string, { next: string; condition?: (data?: any) => boolean }[]>
}