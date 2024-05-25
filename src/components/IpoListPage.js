import data from "./utils/data";
import "./IpoListPage.css";
import { useState } from "react";
function IpoListPage() {
  const [getData, setData] = useState(data);
  const [getDetails, setDetails] = useState(null);

  //storing each companies ipo details
  var ipo_details = (e) => {
    setDetails(e.ipo_details);
  };

  // console.log(data);
  return (
    <>
      <div className="container">
        {getDetails ? (
          (console.log(getDetails.details),
          (
            //details Page
            <div className="details_container">
              <div className="sub_dt_container">
                <div className="upper">
                  <div className="left_part">
                    <div className="back_icon" onClick={() => setDetails(null)}>
                      {" "}
                      back{" "}
                    </div>
                    <div className="company_img">
                      <img
                        style={{ width: "70px" }}
                        src={getDetails.company.logo}
                        alt="logo"
                      />
                    </div>
                    <div className="company">
                      <div className="company_name">
                        {getDetails.company.name}
                      </div>
                      <div className="type">{getDetails.company.type}</div>
                    </div>
                  </div>
                  <div className="right_part">
                    <button className="download">Download</button>
                    <button className="apply">Apply now</button>
                  </div>
                </div>

                <div className="ipo_details">
                  <div className="title">IPO details</div>
                  <div className="details">
                    <div className="upper_details">
                      <div className="sub_details">
                        <div className="ipo_title">Issue size</div>
                        <div className="amount">
                          {getDetails.details.issueSize}
                        </div>
                      </div>
                      <div className="sub_details">
                        <div className="ipo_title">Price range</div>
                        <div className="amount">
                          {getDetails.details.priceRange}
                        </div>
                      </div>
                      <div className="sub_details">
                        <div className="ipo_title">Minimum amount</div>
                        <div className="amount">
                          {getDetails.details.minimumAmount}
                        </div>
                      </div>
                      <div className="sub_details">
                        <div className="ipo_title">lot size</div>
                        <div className="amount">
                          {getDetails.details.lotSize}
                        </div>
                      </div>
                    </div>
                    <div className="lower_details">
                      <div className="sub_details">
                        <div className="ipo_title">Issue date</div>
                        <div className="amount">
                          {getDetails.details.issueDates}
                        </div>
                      </div>
                      <div className="sub_details">
                        <div className="ipo_title">Listed on</div>
                        <div className="amount">
                          {getDetails.details.listedOn}
                        </div>
                      </div>
                      <div className="sub_details">
                        <div className="ipo_title">Listed price</div>
                        <div className="amount">
                          {getDetails.details.listedPrice}
                        </div>
                      </div>
                      <div className="sub_details">
                        <div className="ipo_title">Listed gains</div>
                        <div className="amount">
                          {getDetails.details.listingGains}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ipo_timeline">
                  <div className="title">IPO timeline</div>
                  <div className="timeline_details">
                    <div className="sub_timeline">
                      <div className="timeline-icon">✓</div>
                      <div className="content">
                        <div className="timeline_title">Bidding starts</div>
                        <div className="date">
                          {getDetails.timeline.biddingStarts}
                        </div>
                      </div>
                      <div className="timeline-line"></div>
                    </div>
                    <div className="sub_timeline">
                      <div className="timeline-icon">✓</div>
                      <div className="content">
                        <div className="timeline_title">Bidding Ends</div>
                        <div className="date">
                          {getDetails.timeline.biddingEnds}
                        </div>
                      </div>
                      <div className="timeline-line"></div>
                    </div>
                    <div className="sub_timeline">
                      <div className="timeline-icon">✓</div>
                      <div className="content">
                        <div className="timeline_title">
                          Allotment finalization
                        </div>
                        <div className="date">
                          {getDetails.timeline.allotmentFinalization}
                        </div>
                      </div>
                      <div className="timeline-line"></div>
                    </div>
                    <div className="sub_timeline">
                      <div className="timeline-icon">✓</div>
                      <div className="content">
                        <div className="timeline_title">
                          Refund initialization
                        </div>
                        <div className="date">
                          {getDetails.timeline.refundInitiation}
                        </div>
                      </div>
                      <div className="timeline-line"></div>
                    </div>
                    <div className="sub_timeline">
                      <div className="timeline-icon">✓</div>
                      <div className="content">
                        <div className="timeline_title">Demat transfer</div>
                        <div className="date">
                          {getDetails.timeline.dematTransfer}
                        </div>
                      </div>
                      <div className="timeline-line"></div>
                    </div>
                    <div className="sub_timeline">
                      <div className="timeline-icon">✓</div>
                      <div className="content">
                        <div className="timeline_title">Listing date</div>
                        <div className="date">
                          {getDetails.timeline.listingDate}
                        </div>
                      </div>
                      <div className="timeline-line"></div>
                    </div>
                  </div>
                </div>

                <div className="description">
                  <div className="title">About the company</div>
                  <div className="about_dpt">
                    <p className="dpt">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum facilis fuga ea natus qui magnam culpa corrupti,
                      molestiae iusto fugiat quam incidunt beatae ipsum
                      consequuntur cupiditate a cumque deleniti doloremque
                      dolores praesentium cum quo nemo inventore quos! Earum
                      consequatur nulla magnam assumenda expedita sunt officia
                      asperiores odit repellendus nobis atque tenetur tempora
                      blanditiis nihil impedit aliquid omnis rem laudantium,
                      unde eius, aut iure. Vel nisi delectus atque, culpa magnam
                      ipsa velit neque explicabo odio sit unde dolorem dolorum
                      repudiandae provident, tempora, consectetur doloremque
                      ratione est nobis. Porro laudantium laborum, beatae
                      commodi facilis modi voluptas voluptatem eveniet error
                      corporis quas repellat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          //list page
          <div className="list_page">
            <table>
              <thead>
                <tr>
                  <th>Company / issue date</th>
                  <th>Issue size</th>
                  <th>Price range</th>
                  <th>Min invest/qty</th>
                </tr>
              </thead>
              <tbody>
                {getData.map((e, i) => (
                  <tr key={i} onClick={() => ipo_details(e)}>
                    <th>
                      <div className="company_col">
                        <div>
                          <img
                            style={{ width: "40px", padding: "0 20px 0 0" }}
                            src={e.logo}
                            alt="img"
                          />
                        </div>
                        <div>
                          <div>{e.companyName}</div>
                          <div className="issue_date">{e.issueDate}</div>
                        </div>
                      </div>
                    </th>
                    <th>{e.issueSize}</th>
                    <th>{e.priceRange}</th>
                    <th>
                      <div>{e.minInvestQty}</div>
                      <div className="share_lots">{e.sharesLots}</div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default IpoListPage;
