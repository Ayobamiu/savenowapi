/** @format */

const moment = require("moment");

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

const calculateDeliveryCost = (
  deliveryState,
  pickUpState,
  lat1,
  lon1,
  lat2,
  lon2
) => {
  let message = "";
  let name = "Gokada";
  let fee = 0;
  let eta = moment().add(4, "hour").toDate();
  let courier_id = "gokada";

  const baseFare = 400;
  const perKm = 40;

  const distance = getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);
  fee = distance * perKm + baseFare;

  // if (deliveryState !== "Lagos" || pickUpState !== "Lagos") {
  //   message = "We only deliver in Lagos currently.";
  // } else {

  message = "success";
  // }

  return {
    message,
    name,
    fee: fee > 2000 ? 2000 : Math.round(fee),
    eta,
    courier_id,
  };
};

module.exports = {
  calculateDeliveryCost,
};
