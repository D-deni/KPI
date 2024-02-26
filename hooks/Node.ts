import isEqual from 'lodash/isEqual'
import {toast} from "vue3-toastify";

class Node {
    self: any
    parent: unknown
    previous: any
    constructor(self: any, parent = null, previous = null) {
        this.self = self
        this.parent = parent
        this.previous = previous
    }
}

export class LinkedList {
    head: any
    tail: any
    constructor() {
        this.head = null
        this.tail = null
    }

    append(self: any): void {
        const node = new Node(self)
        if (this.tail) {
            this.tail.parent = node
        }
        if (!this.head) {
            this.head = node
        }
        this.tail = node
    }

    delete(value: any) {
        if (!this.head) {
            return null
        }
        let deletedNode = null
        while (this.head && isEqual(this.head.self, value)) {
            deletedNode = this.head
            this.head = this.head.parent
        }
        let currentNode = this.head
        if (currentNode !== null) {
            while (currentNode.parent) {
                if (isEqual(currentNode.parent.self, value)) {
                    deletedNode = currentNode.parent;
                    currentNode.parent = currentNode.parent.parent
                } else {
                    currentNode = currentNode.parent
                }
            }
        }
        if (isEqual(this.tail?.self, value)) {
            this.tail = currentNode;
        }
        return deletedNode
    }

    deleteNodeValue(targetValue: any, removeObject: any): void {
        let current = this.head
        while (current) {
            if (isEqual(current.self, targetValue) && Array.isArray(current.self)) {
                const indexToRemove = current.self.findIndex((obj: object) => isEqual(obj, removeObject))
                if (indexToRemove !== -1) {
                    current.self.splice(indexToRemove, 1)
                    return
                }
            }
            current = current.parent
        }
    }

    replaceNodeValue(targetValue: any, newValue: any): void {
        let current = this.head
        while (current) {
            if (isEqual(current.self, targetValue)) {
                current.self = newValue
                return
            }
            current = current.parent
        }
    }

    addContentToNode(targetValue: any, content: any): void {
        let current = this.head
        while (current) {
            if (isEqual(current.self, targetValue)) {
                current.self.push(content);
                return
            }
            current = current.parent
        }

    }

    find(value: any) {
        if (!this.head) {
            return null
        }
        let currentNode = this.head
        while (currentNode) {
            if (isEqual(currentNode.self, value)) {
                return currentNode
            }
            currentNode = currentNode.parent
        }
        return null
    }

    insertAfter(after: any, data: any) {
        const found = this.find(after)
        if (!found) {
            return this
        }
        found.next = new Node(data, found.next)
    }

    swipeIfCondition() {
        let current = this.head

        while(current && current.parent){
          if(current.self[0].priority < current.parent.self[0].priority){
              const tempSelf = current.self;
              current.self = current.parent.self;
              current.parent.self = tempSelf;

              const tempParent = current.self.parent;
              current.self.parent = current.parent.self.parent;
              current.parent.self.parent = tempParent;
            toast.info('Пользователь был перемещен', {theme: 'auto', autoClose: 1500})
          }
          console.log(current)
          current = current.parent
        }

    }

    toArray(): any[] {
        const nodes: any[] = []
        let currentNode = this.head
        while (currentNode) {
            nodes.push(currentNode)
            currentNode = currentNode.parent
        }
        return nodes
    }
}
