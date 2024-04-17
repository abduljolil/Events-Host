 
 
 const TabComponent = () => {
    return (
        <div className="   py-4">
      <div role="tablist" className="tabs tabs-boxed  justify-center">
         <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="All" />
  {/* <div role="tabpanel" className="tab-content p-10">All</div> */}

  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="For You" checked />
  {/* <div role="tabpanel" className="tab-content p-10">For You</div> */}

  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="This dey" />
  {/* <div role="tabpanel" className="tab-content p-10">This dey</div> */}
  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="This Weak" />
  {/* <div role="tabpanel" className="tab-content p-10">This Weak</div> */}
  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Music" />
  {/* <div role="tabpanel" className="tab-content p-10">Music</div> */}
  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Union" />
  {/* <div role="tabpanel" className="tab-content p-10">Union</div> */}

        </div>
        </div>
    );
 };
 
 export default TabComponent;