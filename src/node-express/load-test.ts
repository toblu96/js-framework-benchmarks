import http from "k6/http";
import { sleep, check } from "k6";

export const options = {
  vus: 10,
  duration: "10s",
};

export default function () {
  const response = http.get("http://localhost:3003/api/hello");

  check(response, {
    "status is 200": (r) => r.status === 200,
    "payload matches": (r) => r.json().hello === "express",
  });
  // sleep(1);
}
