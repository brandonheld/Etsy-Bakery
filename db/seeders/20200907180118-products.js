'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {productName: 'Burnt Sugar Caramel Cake',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/08/burnt-sugar-cake.jpg',
      price: 26,
      rating: 4,
      description: 'This unique and absolutely divine burnt sugar caramel cake gets its flavor from burnt sugar syrup. Cook sugar until caramelized, then add boiling water. We’ll use the syrup in both the cake and frosting. Add salted caramel for extra flavor and toasted pecans for a lovely garnish. It’s soft, buttery.',
      category: 'cake'
    },
{productName: 'Simple Homemade Wedding Cake',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2020/01/homemade-DIY-wedding-cake-600x900.jpg',
      price: 16,
      rating: 3,
      description: 'This simply decorated and elegant vanilla wedding cake has 2 tiers and comes with full assembly instructions.',
      category: 'cake'
    },
{productName: 'Dark Chocolate Raspberry Coffee Cake',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2013/02/dark-chocolate-raspberry-coffee-cake-3-600x900.jpg',
      price: 6,
      rating: 2,
      description: 'This dark chocolate raspberry coffee cake is soft and moist with a buttery almond streusel on top. Dotted with juicy raspberries and filled with chocolate chips, this breakfast cake is a treat! We love it on Christmas morning, but it’s welcome year-round.',
      category: 'cake'
    },
{productName: 'Triple Chocolate Cake',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4-600x900.jpg',
      price: 48,
      rating: 4,
      description: 'This is my favorite homemade chocolate cake recipe. With a super moist crumb and fudgy, yet light texture, this chocolate cake recipe will soon be your favorite too. Top with chocolate buttercream and chocolate chips for 3x the chocolate flavor. You can also prepare this chocolate layer cake as a sheet cake, too.',
      category: 'cake'
    },
{productName: 'Dark Chocolate Mousse Cake',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/08/chocolate-mousse-cake-600x900.jpg',
      price: 34,
      rating: 5,
      description: 'This super moist dark chocolate mousse cake combines unsweetened natural cocoa powder and dark cocoa powder for an extra rich flavor. Fill the cake with a simplified chocolate mousse and cover the whole dessert with semi-sweet chocolate ganache.',
      category: 'cake'
    },
{productName: 'Chocolate Cake Roll (Swiss Roll)',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/05/chocolate-swiss-roll-cake-5-600x900.jpg',
      price: 12,
      rating: 4,
      description: 'A nod to the classic childhood favorite, this chocolate cake roll combines light chocolate sponge cake with sweet vanilla whipped cream and chocolate ganache. Rich and totally irresistible, this dessert is for chocolate lovers everywhere.',
      category: 'cake'
    },
{productName: 'Fluffy & Moist Coconut Cake',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/04/layered-coconut-cake-600x900.jpg',
      price: 7,
      rating: 4,
      description: 'This perfect coconut cake sets the bar for homemade cakes everywhere. It’s supremely moist with a soft fluffy crumb and intense coconut flavor.',
      category: 'cake'
    },
{productName: 'Upside-Down Pear Gingerbread Cake',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/11/upside-down-pear-gingerbread-cake-600x900.jpg',
      price: 15,
      rating: 3,
      description: 'Inspired by my pineapple upside down cake recipe, this boldly spiced upside-down pear gingerbread cake combines your favorite holiday spices with juicy pears, brown sugar caramel sauce, and cool whipped cream. Serving warm brings out the flavors AND makes this a quick holiday dessert.',
      category: 'cake'
    },
{productName: 'Black Forest Cake',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/11/black-forest-cake-4-600x900.jpg',
      price: 36,
      rating: 2,
      description: 'This deliciously moist Black Forest Cake is a cut above the rest with homemade whipped cream, rich chocolate ganache, and sweet spiked cherries.',
      category: 'cake'
    },
{productName: 'Brownie Baked Alaska',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/06/mint-chocolate-brownie-baked-alaska-600x900.jpg',
      price: 49,
      rating: 1,
      description: 'This brownie baked Alaska combines homemade brownies with your favorite ice cream flavor (like mint chocolate chip) and is topped with toasted marshmallow meringue for a truly memorable and impressive treat.',
      category: 'cake'
    },
{productName: 'Upgraded German Chocolate Cake',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/02/german-chocolate-cake-4-600x900.jpg',
      price: 28,
      rating: 3,
      description: 'This show stopping German chocolate cake has a gooey coconut and toasted pecan filling, a dark and super-moist chocolate cake, and deliciously creamy chocolate buttercream on top! Get ready to indulge in the best chocolate cake on the planet.',
      category: 'cake'
    },
{productName: 'Homemade Strawberry Cake',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/12/homemade-strawberry-cake-4-600x900.jpg',
      price: 15,
      rating: 4,
      description: 'The one thing that sets this strawberry cake apart from others? Reduce fresh strawberry puree down and add to the best white cake batter. Kiss your boxed strawberry cake buh-bye.',
      category: 'cake'
    },
{productName: 'Tuxedo Cake',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/12/tuxedo-cake-4-600x900.jpg',
      price: 14,
      rating: 4,
      description: '3 layers of homemade chocolate cake dressed up with creamy white chocolate ganache filling and a layer of dark chocolate silk frosting so thick, it makes a fat marshmallow look like a string bean.',
      category: 'cake'
    },
{productName: 'Zebra Cake',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/12/zebra-cake-4-600x900.jpg',
      price: 24,
      rating: 3,
      description: 'You’re looking at chocolate and vanilla cakes baked together in a striking striped pattern. Pretty, right? Much easier than you think to pull off, too. Like marble cake but a little more flashy. Zebra cake is often baked as a single layer cake or a bundt cake.',
      category: 'cake'
    },
{productName: 'Chocolate Zucchini Cake',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/06/chocolate-zucchini-cake-600x900.jpg',
      price: 11,
      rating: 2,
      description: 'Super moist and indulgent chocolate zucchini cake is studded with chocolate chips and topped with chocolate fudge frosting. Made with three cups of shredded zucchini (you can’t taste it!), this is the most decadent way to eat your greens.',
      category: 'cake'
    },
{productName: 'Blackberry Cream Cheese Crumb Cake',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/05/blackberry-cream-cheese-crumb-cake-5-600x900.jpg',
      price: 31,
      rating: 4,
      description: 'This is the softest, most buttery breakfast cake I’ve ever made. We’re going to skip the cinnamon swirl (sorry! but I promise this gets better!) and add a handful of juicy blackberries. I secretly love throwing blackberries into muffins, quick breads, and cakes because you’re left with magenta polka dotted baked goods.',
      category: 'cake'
    },
{productName: 'Spiced Gingerbread Loaf',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2016/11/spiced-gingerbread-loaf-1-600x900.jpg',
      price: 22,
      rating: 1,
      description: 'Soft, moist, and intensely flavored gingerbread loaf tastes just like the holidays! Made with molasses and ginger and drizzled with orange glaze, you’ll welcome a slice any time of day.',
      category: 'cake'
    },
{productName: 'Brookie Pie',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2016/08/brookie-pie-4-600x900.jpg',
      price: 54,
      rating: 5,
      description: 'Homemade deep dish brookie pie combines everything we love about soft chocolate chip cookies and brownies from scratch. When you can’t choose between chocolate chip cookies or brownies, have both!',
      category: 'cake'
    },
{productName: 'Easy 5 Layer Ice Cream Cake',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2016/08/5-layer-ice-cream-cake-recipe-2.jpg',
      price: 49,
      rating: 4,
      description: 'Cool off with a slice of no-bake ice cream cake! This easy summertime treat combines two of your favorite ice cream flavors, hot fudge, homemade whipped cream, and sprinkles– all on top of an Oreo cookie crust. Because this cake needs to freeze for at least 12 hours prior to serving, it’s a great make ahead dessert option.',
      category: 'cake'
    },
{productName: 'Lemon Pudding Cakes',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2020/04/lemon-pudding-cakes-600x900.jpg',
      price: 23,
      rating: 4,
      description: 'With fluffy lemon cake on top and rich lemon pudding on the bottom, these unique lemon pudding cakes are a texture dream. It’s all made from 1 easy cake batter and 8 simple ingredients. Baked in individual ramekins, these little cakes are surprisingly easy to prepare, but seem wonderfully special.',
      category: 'cake'
    },
{productName: 'Fresh Berry Cream Cake',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2020/03/fresh-berry-cream-cake-600x900.jpg',
      price: 61,
      rating: 2,
      description: 'Using any soft/light cake recipe of your choice, you can create a delicious fresh berry cream cake. I recommend using my white cake recipe below or you could even try chocolate, pistachio, or a 6 inch cake instead. This minimally decorated naked-style cake is layered between fresh and fluffy whipped cream and piled high with juicy berries. ',
      category: 'cake'
    },
{productName: 'Elmo Cake',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/09/elmo-cake-600x890.jpg',
      price: 42,
      rating: 4,
      description: 'Made from scratch without the crutch of cake mix, this homemade rum cake is perfectly moist, extra buttery, and flavored with rum. Top with boozy butter rum glaze and serve warm or cold. Rum cake doesn’t require a special occasion, but it’s perfect for the holidays!',
      category: 'cake'
    },
{productName: 'Snickerdoodle Cake',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/10/snickerdoodle-cake-3-600x900.jpg',
      price: 9,
      rating: 5,
      description: 'Using my vanilla cake recipe as the base, you can create an absolutely mouthwatering snickerdoodle cake filled with buttery cinnamon swirls and topped with creamy brown sugar cinnamon buttercream frosting. This cinnamon cake goes down in history as one of my best cake masterpieces. Everyone raved about it!',
      category: 'cake'
    },
{productName: 'Vertical Cake (Lemon & Blueberry)',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/07/vertical-layer-cake-600x900.jpg',
      price: 16,
      rating: 4,
      description: 'Assembled with vanilla sponge cake, lemon blueberry swirl whipped cream, and lemon cream cheese buttercream, this vertical cake is a beautiful masterpiece. It’s soft and light with bright refreshing flavors and an impressive aesthetic. For recipe success, follow the recipe and video tutorial closely.',
      category: 'cake'
    },
{productName: 'One Layer Strawberry Shortcake Cake',
      img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/05/strawberry-shortcake-cake-600x900.jpg',
      price: 100,
      rating: 5,
      description: 'This one layer strawberry shortcake cake is a stunning (yet totally manageable!) ending to your meal. This single layer vanilla cake uses the reverse creaming method, which guarantees a uniquely moist and soft crumb. Top the small cake with vanilla whipped cream and plenty of juicy strawberries. It’s summery, refreshing, and wonderfully light!',
      category: 'cake'
    }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products');
  }
};
