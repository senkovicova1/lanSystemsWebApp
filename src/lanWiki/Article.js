import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comments from './Comments';

export default class Article extends Component{

  render(){
    return (
      <div >
          <div className='DataTable'>
            <Link to={{pathname: `/lanwiki/articles/edit/a-big-title`}}>
              <p>Edit</p>
            </Link>

            <h1> A Big Title </h1>
            <p> Created: Branislav Susta 7:23 10.9.2018 </p>
            <p> Last Edit: Branislav Susta 7:23 10.9.2018 </p>

            <p>
              Tags: Linux | Config List
            </p>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur vulputate est eget fringilla. Suspendisse faucibus velit id nibh venenatis, eu mollis velit euismod. Aliquam erat volutpat. Vivamus ac rhoncus urna. Etiam nec faucibus nisi. Cras quis elit pharetra, maximus nunc a, varius elit. Proin et sem accumsan, hendrerit purus id, rutrum velit. Fusce lacinia elit tellus, in tempus ante maximus id. Vivamus consequat risus ac semper dictum. Suspendisse elementum volutpat egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed placerat augue, vitae mattis mauris. Sed molestie ac ex sed interdum. Phasellus dui sapien, porttitor ut mattis nec, placerat sed felis. Nam quis tincidunt lacus.
            </p>
            <p>
            Aenean blandit tortor est, et sodales ante ultrices ac. Pellentesque tincidunt varius aliquet. Suspendisse malesuada metus a sapien lacinia, vel tempor ex fringilla. Etiam a consequat orci, vitae aliquet arcu. Vivamus pellentesque venenatis quam non porta. Sed lobortis non ante ac iaculis. Proin malesuada libero metus. Nulla urna lacus, ultrices nec aliquet sit amet, gravida in eros. Vivamus efficitur fermentum erat eget viverra. Vivamus non tortor at ante sollicitudin pharetra. Proin consequat finibus diam, a fringilla turpis elementum fermentum. Quisque finibus lacus sed rutrum viverra.
            </p>

          </div>
          <Comments />
      </div>
    );
  }
}
