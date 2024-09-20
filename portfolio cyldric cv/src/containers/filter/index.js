





function Filter() {
    const x = document.getElementsByClassName("filterDiv");
    const filterSelection = () => {
        console.log(x);
        x.element.classList.add("show");
        console.log(x);
    }


    return (
        <div id="myBtnContainer" className="boxCart" >
            <button type="button" className="btn active" onClick={filterSelection}> Tous</button>
            <button type="button" className="btn" onClick={filterSelection}> HTML</button>
            <button type="button" className="btn" onClick={filterSelection}> Javascript</button>
        </div>
    );
}





export default Filter;