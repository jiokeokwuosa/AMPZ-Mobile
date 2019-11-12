import React from 'react';
import Item from './includes/Item';
import Item1 from './includes/Item1';

function MyApp() {
  return (
    <>
      <div id="main1" className="container-fluid">
         <div className="row">
            <div className="col-md-12">
                  <ul>
                     <li><img src={require('../../src/assets/img/1.png')} alt="alt"/></li>
                     <li className="floatRight"><img src={require('../../src/assets/img/2.png')} className="traffic" alt="alt"/><img src={require('../../src/assets/img/9.png')} className="traffic" alt="alt"/></li>
                  </ul>
            </div>
            <div className="col-md-12 push">
                  <ul>
                     <li><span className="digit">20  159.52</span> <span className="currency">USD</span></li>                    
                  </ul>
            </div>
            <div className="col-md-12">
                  <ul>
                     <li><span className="balance">Balance</span> <span className="">+2435.544</span></li>                    
                  </ul>
            </div>
            <div className="col-md-12 push">
                  <ul>
                     <li className="box"><Item title='BTC' percentage='40%' percentage1='+5%'/></li> 
                     <li className="box floatRight"><Item title='ETH' percentage='67%' percentage1='+3%'/></li>                                       
                  </ul>
            </div>
            <div className="col-md-12 push">
                  <ul>
                     <li><img src={require('../../src/assets/img/3.png')} className="traffic" alt="alt"/>Add Funds</li>
                     <li className="floatRight"><select>
                        <option>Dynamic</option>
                        </select></li>
                  </ul>
            </div>
         </div>
      </div>
      <div id="main2" className="container-fluid">
         <div className="row">
            <div className="col-md-12">
               <ul>
                  <li><h3>Accounts</h3></li>
                  <li className="floatRight"><img src={require('../../src/assets/img/4.png')} className="traffic" alt="alt"/></li>
               </ul>
            </div>
            <div className="col-md-12 push">
                  <ul>
                     <li className="box3"><Item1 image={require('../../src/assets/img/5.png')} title='Bitcoin' amount='$8,967.51' percentage='-44.30%' titleClass='color1' percentageClass='per1'/></li> 
                     <li className="box3 floatRight"><Item1 image={require('../../src/assets/img/6.png')} title='Etherium' amount='$2,967.27' percentage='-84.30%' titleClass='color2' percentageClass='per2'/></li>                                       
                  </ul>
            </div>
            <div className="col-md-12 push">
                  <ul>
                     <li className="box3"><Item1 image={require('../../src/assets/img/7.png')} title='Litecoin' amount='$2,967.21' percentage='-24.30%' titleClass='color3' percentageClass='per3'/></li> 
                     <li className="box3 floatRight"><Item1 image={require('../../src/assets/img/8.png')} title='Peercoin' amount='$7,967.29' percentage='-54.30%' titleClass='color4' percentageClass='per4'/></li>                                       
                  </ul>
            </div>
         </div>
      </div>
    </>
  );
}

export default MyApp;
