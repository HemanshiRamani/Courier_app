import { Typography, Row, Col, Image } from "antd";
import React from "react";
import "./method.scss";
import byroad from "../../image/byroad.jpg";
import byair from "../../image/byair.jpg";
import byship from "../../image/byship.jpg";
import bytrain from "../../image/bytrain.jpg";

const Method = () => {
  return (
    <>
      <div className="bgmethod">
        <div className="method">
          <Typography.Title className="t1">
            OUR DELIVERY METHOD
          </Typography.Title>
        </div>

        <div className="method2">
          <Row>
            <Col>
              <Image src={byroad} alt="byroad" className="road"></Image>
            </Col>

            <div className="first">
              <div className="byroad">By Road</div>
            </div>
          </Row>

          <div className="paragraph">
            <Typography.Paragraph className="para">
              Road transport means transportation of goods and personnel from
              one place to the other on roads. Road is a route between two
              destinations, which has been either paved or worked on to enable
              transportation by way of motorised and non-motorised carriages.
              Road is a route between two destinations, which has been either
              paved or worked on to enable transportation by way of motorised
              and non-motorised carriages.There are many advantages of road
              transport in comparison to other means of transport.The investment
              required in road transport is very less compared to other modes of
              transport such as railways and air transport. The cost of
              construction, operating cost and maintaining roads is cheaper than
              that of the railways.
            </Typography.Paragraph>
          </div>
        </div>

        <div className="method3">
          <div className="methodair">
            <Image src={byair} alt="byair" className="air"></Image>
          </div>
          <div className="paragraph2">
            <Typography.Paragraph className="para2">
              An air courier service could refer to one of two things - the
              matching of travelers with packages going to the same destination,
              or companies that actually take control of the shipping
              themselves. Both provide very fast ways to get packages and
              documents from one place to the other, but it can also be quite
              expensive.Taking the time to understand what an air courier
              service offers, and the difference between the two types is very
              important.
            </Typography.Paragraph>
          </div>
          <div className="second">
            <div className="byair">By Air</div>
          </div>
        </div>

        <div className="method4">
          <div className="methodship">
            <Image src={byship} alt="byship" className="ship"></Image>
          </div>
          <div className="paragraph3">
            <Typography.Paragraph className="para3">
              A bulk carrier or bulker is a merchant ship specially designed to
              transport unpackaged bulk cargo, such as grains, coal, ore, steel
              coils, and cement, in its cargo holds Since the first specialized
              bulk carrier was built in 1852, economic forces have led to
              continued development of these ships, resulting in increased size
              and sophistication. Today's bulk carriers are specially designed
              to maximize capacity, safety, efficiency, and durability.Today,
              bulk carriers make up 21% of the world's merchant fleets[2] and
              range in size from single-hold mini-bulk carriers to mammoth ore
              ships able to carry 400,000 metric tons of deadweight (DWT).
            </Typography.Paragraph>
          </div>
          <div className="third">
            <div className="byship">By Ship</div>
          </div>
        </div>

        <div className="method5">
          <div className="methodtrain">
            <Image src={bytrain} alt="bytrain" className="train"></Image>
          </div>
          <div className="paragraph4">
            <Typography.Paragraph className="para4">
              Rail transport is also known as train transport. It is a means of
              transport, on vehicles which run on tracks (rails or railroads).It
              is one of the most important, commonly used and very cost
              effective modes of commuting and goods carriage over long, as well
              as, short distances. Since this system runs on metal (usually
              steel) rails and wheels, it has an inherent benefit of lesser
              frictional resistance which helps attach more load in terms of
              wagons or carriages.This system is known as a train. Usually,
              trains are powered by an engine locomotive running on electricity
              or on diesel.
            </Typography.Paragraph>
          </div>
          <div className="fourth">
            <div className="bytrain">By Train</div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Method;
