import React, {useState} from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Content.css";
import data from "../../Needed/Accordion";

const Content = () => {
    const [className, setClassName] = useState(null)
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">

        {/* Left side */}
        <div className="c-left">
          <div className="image-container">
            <img src="pexels-lukas-rodriguez-3680219.jpg" alt="No Image" />
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart c-right">
          <span className="orangeText">The Magic Of This Assignment :</span>
          <span className="primaryText">How It Delivers Accurate and Reliable Information</span>

          <Accordion
            allowMultipleExpanded={false}
            preExpanded={[2]}
            className="accordion"
          >
            {data.map((item, i) => {
                
            return (
              <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionButton">

                    <AccordionItemState>
                        {({expanded})=>expanded ? setClassName('expanded') : setClassName('collapsed')}
                    </AccordionItemState>

                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">{item.heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            )})}
          </Accordion>
          
        </div>
      </div>
    </section>
  );
};

export default Content;
