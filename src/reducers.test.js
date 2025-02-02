import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';

 import * as reducers from "./reducers"

 describe("searchRobots", () => {
    const initialStateSearch = {
        searchField: ""
    }
    it("should return the initial state", () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ""})
    })

    it("should handle the search field event", () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCHFIELD,
            payload: "abc"
        })).toEqual({searchField: "abc"})
    })
 })

 describe("requestRobots", () => {
    const initialStateRobots = {
        robots: [],
        isPending: false
    }
    it("should return the initial state", () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    })

    it("should handle Request robots pending action", () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true
        })
    })

    it("should handle Request robots success action", () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: "123",
                name: "test",
                email: "test@gmail.com"            }]
        })).toEqual({
            robots: [{
                id: "123",
                name: "test",
                email: "test@gmail.com"
            }],
            isPending: false
        })
    })

    it("should handle Request robots failed action", () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: "NOOOO!"
        })).toEqual({
            error: "NOOOO!",
            robots: [],
            isPending: false
        })
    })
 })