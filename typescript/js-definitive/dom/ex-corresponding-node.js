const A = document.createElement("div");
A.innerHTML = `
<div>
<div>
  <div>
    <div id="node1"></div>
  </div>
  <div>
  </div>
  <div>
    <div>
      <p id="node2"></p>
    </div>
  </div>
</div>
</div>`;

const B = A.cloneNode(true);
const node1 = A.querySelector("#node1");
const node2 = A.querySelector("#node2");
const node1Target = B.querySelector("#node1");
const node2Target = B.querySelector("#node2");

const result1 = findCorrespondingNode(A, B, node1); // node1Target
const result2 = findCorrespondingNode(A, B, node2); // node2Target
console.log("result1=", result1);
console.log("result2=", result2);

// given a target node in first tree A, find the corresponding node in a second tree B
function findCorrespondingNode(rootA, rootB, target) {
  //console.log(`root a :` , rootA.innerHTML)
  if (rootA === target) return rootB;

  if (rootA.childElementCount) {
    // find on each child
    for (let i = 0; i < rootA.childElementCount; i++) {
      let result = findCorrespondingNode(
        rootA.children[i],
        rootB.children[i],
        target
      );

      // return the result or undefine
      if (result) {
        return result;
      }
    }
  }
}

function getHTMLDepth(root) {
  if (!root) return 0;
  let maxDepth = 0;

  function getDepth(current, currentDepth = 1) {
    if (current.childElementCount) {
      console.log("children = ", current.childElementCount, current.innerHTML);
      for (let c of current.children) {
        getDepth(c, currentDepth + 1);
      }
    }

    maxDepth = Math.max(maxDepth, currentDepth);
  }

  getDepth(root, 1);
  return maxDepth;
}

console.log("node2 depth = ", getHTMLDepth(A));
