/** 
 * @description 组合模式经典案例
 */

class Folder {
    constructor(name) {
        /** 父节点 */
        this.parent = null
        /** 文件夹名 */
        this.name = name
        /** 文件夹下的所有文件 */
        this.files = []
    }

    add(file) {
        file.parent = this
        this.files.push(file)
    }

    scan() {
        console.log(`开始扫描${this.name}文件夹：`)
        let str = ''
        for(let i = 0, len = this.files.length; i < len; i++) {
           str += this.files[i].scan() + '\n'
        }
        console.log('扫描到文件：', str)
    }

    remove() {
        /** 根结点或者游离节点 */
        if(!this.parent) return

        for(let i = 0, len = this.parent.files.length; i < len; i++) {
            this.parent.files.splice(i, 1)
        }
    }
}

class File {
    constructor(name) {
        this.name = name
        this.parent = null
    }

    add() {
        throw new Error('不能添加在文件下面')
    }

    scan() {
        console.log(`${this.parent.name}文件夹下扫描到文件: `, this.name)
        return this.name
    }

    remove() {
        if(!this.parent) return
        const files = this.parent.files
        for(let i = 0, len = files.length; i < len; i++) {
            let file = files[i]

            if (file === this) {
                files.splice(i, 1)
            }
        }
    }
}

const folder = new Folder('folder')
const folder1 = new Folder('folder1')
const folder2 = new Folder('folder2')

const file = new File('file')
const file1 = new File('file1')
const file2 = new File('file2')

folder.add(folder1)
folder.add(file2)

folder1.add(file1)
folder1.add(folder2)

folder2.add(file)
folder2.add(file2)
debugger
folder.scan()