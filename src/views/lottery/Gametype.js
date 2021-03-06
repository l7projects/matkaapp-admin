
import React from "react";

import { NavLink } from "react-router-dom";

import { AllLotterysetting, GetLotteryById } from './../services/lottery_setting';
// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";
import moment from 'moment';

var now = new Date()
var closetime = moment(now).add(20, "minutes").format('HH:mm');
class Gametype extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      GetMarketTypes: "",
      lotteryData: "",
      isLoaded: "",
    };
  };
  GetMarketTypes = async () => {
    let GetMarketTypes = await AllLotterysetting({ lottery_id: this.props.match.params.id });
    this.setState({
      GetMarketTypes: GetMarketTypes.data.data,
      isLoaded: true
    });
    let Lottery = await GetLotteryById({ lottery_id: this.props.match.params.id });
    this.setState({
      lotteryData: Lottery.data.data
    });
  }
  componentDidMount() {
    this.GetMarketTypes();
  }
  render() {
    const { isLoaded, GetMarketTypes, lotteryData } = this.state;
    return (
      <>
        <div className="content">
          {/* <span className="bg_pattern__shape-1"></span>
        <span className="bg_pattern__shape-2"></span>
        <span className="bg_pattern__shape-3"></span>
        <span className="bg_pattern__shape-4"></span>
        <span className="bg_pattern__shape-5"></span> */}
          <Row className="py-5 my-5 justify-content-center">
            <Col sm="12" className="text-center mt-5">
              <h1 className="mt-5"> Select Your <b>Game Type</b></h1>
            </Col>
            <div className="text-center">
              <ul className="gametypeList">
                {isLoaded && GetMarketTypes.map((type, key) => {
                  return ( 
                    <>
                    {moment(new Date("2021-07-16 " +lotteryData.open)).isBefore(new Date("2021-07-16 " +closetime)) && type.bet_type === "jodi" ? ""
                    : <li className="gametypeCard" to={"/game/" + type.lottery_id} key={key}>
                      <NavLink to={{ pathname: "/dashboard/game/" + type.lottery_id, rate: type.rate, minStake: type.min_stake, maxStake: type.max_stake }}>
                        <div>
                          {/* <img src={require("assets/img/jodi-digit.svg")} alt="matka" /> */}
                          <svg id="Capa_1" enable-background="new 0 0 512.029 512.029" height="512" fill="#6d3b32" viewBox="0 0 512.029 512.029"
                            width="512" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="m468.455 224.481h-208.42c-21.816 0-39.564 17.749-39.564 39.564v161.065l-7.693 4.667c-2.965 1.799-6.138 3.067-9.396 3.842v-204.654l168.218-102.032c.751 2.747 1.153 5.604 1.153 8.505v64.475c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-64.475c0-16.494-8.752-32.067-22.841-40.644l-144.291-87.828c-15.26-9.288-34.219-9.289-49.479 0l-144.29 87.829c-14.089 8.576-22.842 24.15-22.842 40.644v178.962c0 16.524 8.777 32.113 22.905 40.683l144.291 87.518c7.61 4.616 16.143 6.924 24.675 6.924 8.501 0 17-2.294 24.589-6.876v29.815c0 21.816 17.749 39.564 39.564 39.564h208.419c21.816 0 39.564-17.749 39.564-39.564v-208.42c.002-21.816-17.747-39.564-39.562-39.564zm-433.76 117.778c-9.675-5.868-15.685-16.542-15.685-27.857v-178.963c0-2.901.401-5.758 1.153-8.505l19.555 11.861c1.216.737 2.558 1.088 3.882 1.088 2.535 0 5.009-1.286 6.42-3.611 2.148-3.542 1.019-8.154-2.523-10.302l-20.163-12.23c2.107-2.367 4.557-4.451 7.317-6.131l144.29-87.829c10.449-6.36 23.432-6.36 33.881 0l144.291 87.829c2.76 1.68 5.209 3.763 7.317 6.131l-168.549 102.23-121.202-73.514c-3.542-2.148-8.155-1.018-10.302 2.523-2.148 3.542-1.019 8.154 2.523 10.302l121.481 73.683v204.653c-3.258-.775-6.431-2.043-9.396-3.842zm458.324 130.206c0 13.545-11.02 24.564-24.564 24.564h-208.42c-13.545 0-24.564-11.02-24.564-24.564v-208.42c0-13.545 11.02-24.564 24.564-24.564h208.419c13.545 0 24.564 11.02 24.564 24.564v208.42z" />
                            <path
                              d="m103.462 250.612c-6.466-3.733-13.309-4.063-18.773-.909-6.167 3.561-9.705 11.007-9.705 20.428 0 15.309 9.215 32.621 20.978 39.412 3.523 2.034 7.159 3.058 10.623 3.058 2.892 0 5.664-.714 8.15-2.149 6.168-3.561 9.705-11.007 9.705-20.428 0-15.308-9.214-32.62-20.978-39.412zm3.773 46.85c-.668.384-2.149.028-3.773-.909-7.18-4.146-13.478-16.492-13.478-26.422 0-4.876 1.442-6.998 2.205-7.438.179-.103.416-.153.698-.153.773 0 1.886.375 3.075 1.062 7.18 4.146 13.478 16.493 13.478 26.422 0 4.876-1.442 6.997-2.205 7.438z" />
                            <path
                              d="m196.073 135.559c19.011 0 33.903-10.61 33.903-24.154s-14.892-24.154-33.903-24.154-33.902 10.61-33.902 24.154c-.001 13.544 14.891 24.154 33.902 24.154zm0-33.308c11.539 0 18.903 5.421 18.903 9.154s-7.364 9.154-18.903 9.154-18.902-5.422-18.902-9.154 7.363-9.154 18.902-9.154z" />
                            <path
                              d="m278.087 135.559c19.011 0 33.902-10.61 33.902-24.154s-14.892-24.154-33.902-24.154-33.902 10.61-33.902 24.154 14.892 24.154 33.902 24.154zm0-33.308c11.539 0 18.902 5.421 18.902 9.154s-7.364 9.154-18.902 9.154-18.902-5.422-18.902-9.154 7.364-9.154 18.902-9.154z" />
                            <path
                              d="m114.059 135.559c19.011 0 33.902-10.61 33.902-24.154s-14.892-24.154-33.902-24.154-33.902 10.61-33.902 24.154c-.001 13.544 14.891 24.154 33.902 24.154zm0-33.308c11.539 0 18.902 5.421 18.902 9.154s-7.364 9.154-18.902 9.154-18.902-5.422-18.902-9.154 7.363-9.154 18.902-9.154z" />
                            <path
                              d="m364.245 336.706c-17.396 0-31.548 14.152-31.548 31.548s14.152 31.549 31.548 31.549 31.548-14.153 31.548-31.549-14.152-31.548-31.548-31.548zm0 48.098c-9.125 0-16.548-7.424-16.548-16.549s7.423-16.548 16.548-16.548 16.548 7.423 16.548 16.548-7.423 16.549-16.548 16.549z" />
                            <path
                              d="m292.1 264.561c-17.396 0-31.548 14.152-31.548 31.548s14.152 31.548 31.548 31.548 31.548-14.152 31.548-31.548-14.152-31.548-31.548-31.548zm0 48.097c-9.125 0-16.548-7.423-16.548-16.548s7.423-16.548 16.548-16.548 16.548 7.423 16.548 16.548-7.423 16.548-16.548 16.548z" />
                            <path
                              d="m436.39 408.852c-17.396 0-31.548 14.152-31.548 31.548s14.152 31.548 31.548 31.548 31.549-14.152 31.549-31.548-14.153-31.548-31.549-31.548zm0 48.097c-9.125 0-16.548-7.423-16.548-16.548s7.423-16.548 16.548-16.548 16.549 7.423 16.549 16.548-7.424 16.548-16.549 16.548z" />
                          </svg>
                          <span>{type.bet_type}</span><br />
                          <span className="game-rate">Rate: {type.rate}</span>
                        </div>
                      </NavLink>
                    </li>}
                    </>
                  );
                })}
              </ul>
            </div>
          </Row>
        </div>
      </>
    );
  }
}

export default Gametype;
