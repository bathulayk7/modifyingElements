import React, { useState } from "react";

const BobbleSort = () => {
  const [arr, setArr] = useState([]);
  const original = [6, 2, 18, 90, 21, 16];
  const arrStr = ["gold", "data structre", "apple"];

  const numberCompare = (a, b) => a - b;
  const withSort = () => {
    setArr([...original.sort(numberCompare)]);
  };
  function sortByLength(a, b) {
    return a.length - b.length;
  }
  function sortWithStringLength() {
    console.log(arrStr.sort(sortByLength));
  }
  function swap(arr,j,i){
    return [arr[i],arr[j]]=[arr[j],arr[i]]
  }
function BobbleSorting(arr){
  var noSwap;
  for(let i=arr.length;i>0;i--){
    noSwap="true"
    for(let j=0;j<i-1;j++){
      if(arr[j]>arr[j+1]){
        // let temp=arr[j];
        // arr[j]=arr[j+1];
        // arr[j+1]=temp;
        swap(arr,j,j+1)
        noSwap="false"

      }
    }
    if(noSwap)break;
  }
  return arr;
}
  return (
    <>
      <button onClick={withSort}>SortWithBuiltInMethod</button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div style={{ marginRight: "40px" }}>
          <p>Before</p>
          {original.map((ele, i) => (
            <h6 key={i}>{ele}</h6>
          ))}
        </div>
        <div style={{ marginLeft: "40px" }}>
          {arr.length > 0 && <p>After</p>}
          {arr && arr.map((ele, i) => <h6 key={i}>{ele}</h6>)}
        </div>
        {
          //sort with string length
          sortWithStringLength()
        }
        {
          console.log(BobbleSorting([6, 2, 18, 90, 21, 16]))
        }
      </div>
    </>
  );
};

export default BobbleSort;
