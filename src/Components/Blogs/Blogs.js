import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container'>
            <div className="row mt-5">

            
            <Accordion defaultActiveKey={['0']} alwaysOpen>
  <Accordion.Item eventKey="0">
    <Accordion.Header>What Is Context API ?</Accordion.Header>
    <Accordion.Body>
    <p>Context API is a term of React js.Actually it is an alternative way of Props drilling.Instead of Calling Props to get Data from Father component to Child Component, We use Context API.Storing value in a central place, THis Context API allows us to share any type of inforamtion from a component to all or specific component.the steps that must be follow for using Context API.
                   <ol>
                       <li>Create context using the createContext method.</li>
                       <li>Take Your crated context and wrap the context provider around your component tree.</li>
                       <li>Put any Value you like on your context provider using the "value" Props</li>
                       <li>Read That value within any component by using the context consumer</li>
                       
                   </ol>
               </p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What is Sematic Tag ?</Accordion.Header>
    <Accordion.Body>
    <p>HTML Tags are classified in two types. one is Semantic and the other is Non-Semantic.</p>
               <p>Semantic elements have meaningful names which tells about type of content. For example header, footer, table, … etc. HTML5 introduces many semantic elements as mentioned below which make the code easier to write and understand for the developer as well as instructs the browser on how to treat them.
                   
                       the common semantic tags are article <b>
                            aside,
                            details,
                            figcaption,
                            figure,
                            footer,
                            header,
                            main,
                            mark,
                            nav and
                            section
                            </b>    
                            However, Many HTML tags have semantic meaning. That is, the element itself conveys some information about the type of content contained between the opening and closing tags.             
                        </p>
                        <p>We can group the most common and important semantic elements into four categories:
<ul>
    <li>Document structure tags such as footer,
                            header,
                            main,
                            mark,
                            nav and
                            section and so on</li>
    <li> Textual meaning tags such as all Heading Tags, mark, cite, blockquote, strong and more</li>
    <li>  Media type tags for example audio, video , picture and etc</li>
    <li> Correlation tags such ul , figure , address and more.</li>
</ul>
                      
</p>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header>what are inline-elements and block-elements ?</Accordion.Header>
    <Accordion.Body>
    <p>Block Elements : Inline Elements:A block-level element is an HTML element that begins a new line on a web page and extends the full width of the available horizontal space of its parent element. It creates large blocks of content like paragraphs or page divisions. In fact, most HTML elements are block-level elements.

Block-level elements are used within the HTML document's body. They can contain inline elements, as well as other block-level elements.</p>
<p><h3>Inline Elements</h3>
<p>In contrast to a block-level element, an inline element:
    <ul>
        <li>It can begin within a line.</li>
        <li>It does not start a new line.</li>
        <li>Its width only extends as far as it is defined by its tags.</li>
        <li></li>
    </ul>
</p>
</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>

        </div>
    );
};

export default Blogs;