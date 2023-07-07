import { expect, describe, it } from "vitest";
import { Aged, Item, Legendary,Tickets, Conjured, items, updateQuality } from "./gilded-rose.js";

// describe("updateQuality", () => {
//   it("reduces quality and sellIn of basic items by 1", () => {
//     const testItem = new Item("basic", 5, 3);
//     items.push(testItem);

//     updateQuality();

//     expect(testItem.quality).toBe(2);
//     expect(testItem.sellIn).toBe(4);
//   });
// });

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
  it("Once the `sellIn` days is less then zero, `quality` degrades twice as fast", () => {
    const testItem = new Item("basic", -1, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(18);
    expect(testItem.sellIn).toBeLessThan(0)
  });
  it("The `quality` of an item is never negative.", () => {
    const testItem = new Item('basic', 5, 2);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBeGreaterThanOrEqual(0)
  });
  it("'Aged Brie' actually increases in `quality` the older it gets.", () => {
    const testItem = new Aged('Aged Brie', 2, 0);
    items.push(testItem);
    updateQuality();

    expect(testItem.quality).toBeGreaterThan(0)
  });
  it("The `quality` of an item is never more than `50`.", () => {
    const testItem = new Item('basic', 2, 50);
    items.push(testItem);
    updateQuality();

    expect(testItem.quality).toBeLessThanOrEqual(50);
  });
  it("'Sulfuras, Hand of Ragnaros,' being a legendary item, never has to be sold nor does it decrease in `quality`", () => {
    const testItem = new Legendary('Sulfuras, Hand of Ragnaros', 0, 80);
    items.push(testItem);
    updateQuality();

    expect(testItem.quality).toStrictEqual(80);
  });
  it("'Backstage passes to a TAFKAL80ETC concert', increase in `quality` as it's `sellIn` value decreases", () => {
    const testItem = new Tickets('Backstage passes to a TAFKAL80ETC concert', 15, 20);
    items.push(testItem);
    updateQuality();

    expect(testItem.quality).toBe(21);
  });
  it("`quality` increases by `2` when there are `10` days or less left before the concert", () => {
    const testItem = new Tickets('Backstage passes to a TAFKAL80ETC concert', 9, 20);
    items.push(testItem);
    updateQuality();

    expect(testItem.quality).toBe(22);
  });
  it("`quality` increases by `3` when there are `5` days or less left before the concert", () => {
    const testItem = new Tickets('Backstage passes to a TAFKAL80ETC concert', 4, 20);
    items.push(testItem);
    updateQuality();

    expect(testItem.quality).toBe(23);
  });
  it("`quality` drops to `0` after the concert", () => {
    const testItem = new Tickets('Backstage passes to a TAFKAL80ETC concert', -1, 20 );
    items.push(testItem);
    updateQuality();

    expect(testItem.quality).toBe(0);
  });
  it("'Conjured' items degrade in `quality` twice as fast as normal items", () => {
    const testItem = new Conjured('"Conjured" items degrade in `quality` twice as fast as normal items', 3, 6);
    items.push(testItem);
    updateQuality();

    expect(testItem.quality).toBe(4);
  });
});



