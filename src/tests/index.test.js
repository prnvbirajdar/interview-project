// import { render, screen } from "@testing-library/react";
import {sumPositiveNum} from "../../pages/index";

describe('when arguments are positive', () => {
  test('should return the sum', () => {
    expect(sumPositiveNum(4, 5)).toBe(9);
  });
});

describe('when one num is negative', () => {
  test('should throw error', () => {
    let error;
    try {
      sumPositiveNum(-1, 5);
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
  });
});
