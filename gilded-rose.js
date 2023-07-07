export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  decreaseSellIn = () => {
    this.sellIn--;
  }

  changeQuality = () => {
    if(this.sellIn > 0) {
      this.quality--;
    }
  }

  doubleDegrade = () => {
    if(this.sellIn < 0) {
      this.quality -= 2;
    }
  }
}

//aged, legendary, tix, conjured
export class Aged extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

//override method
changeQuality = () => {
      this.quality++;
  };
};

export class Legendary extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  changeQuality = () => {
  //do nothing
  }
  doubleDegrade = () => {
    //do nothing
  }
  decreaseSellIn = () => {
    //do nothing
  }
}

export class Tickets extends Item {
  constructor(name, sellIn, quality) {
    super(name,sellIn, quality);
  }
  changeQuality = () => {
    //if sell in is <= 0, quality should be 0
    if (this.sellIn <= 0) {
      this.quality = 0;
    } else if(this.sellIn <= 5) {
        this.quality += 3;
    } else if (this.sellIn <= 10) {
          this.quality += 2;
    } else {
      this.quality++;
    }

  };
}

export class Conjured extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  changeQuality = () => {
      this.quality -= 2;
  };
}

export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Aged("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Legendary("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Tickets("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Conjured("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for(let item of items) {
    item.doubleDegrade();
    item.decreaseSellIn();
    item.changeQuality();
  }
};

// export const updateQuality1 = () => {
//   for (let item of items) {
//     if (
//       item.name != "Aged Brie" &&
//       item.name != "Backstage passes to a TAFKAL80ETC concert"
//     ) {
//       if (item.quality > 0) {
//         if (item.name != "Sulfuras, Hand of Ragnaros") {
//           item.quality = item.quality - 1;
//         }
//       }
//     } else {
//       if (item.quality < 50) {
//         item.quality = item.quality + 1;
//         if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
//           if (item.sellIn < 11) {
//             if (item.quality < 50) {
//               item.quality = item.quality + 1;
//             }
//           }
//           if (item.sellIn < 6) {
//             if (item.quality < 50) {
//               item.quality = item.quality + 1;
//             }
//           }
//         }
//       }
//     }
//     if (item.name != "Sulfuras, Hand of Ragnaros") {
//       item.sellIn = item.sellIn - 1;
//     }
//     if (item.sellIn < 0) {
//       if (item.name != "Aged Brie") {
//         if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
//           if (item.quality > 0) {
//             if (item.name != "Sulfuras, Hand of Ragnaros") {
//               item.quality = item.quality - 1;
//             }
//           }
//         } else {
//           item.quality = item.quality - item.quality;
//         }
//       } else {
//         if (item.quality < 50) {
//           item.quality = item.quality + 1;
//         }
//       }
//     }
//   }
// };


