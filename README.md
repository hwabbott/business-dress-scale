# Business Dress Scale

This is the business dress scale for your ready-reference.


Rank | Description | Dress Shirt | Tucked | Slacks | Jacket | &nbsp;&nbsp;  Tie &nbsp;&nbsp;  
:---: | --- | :---: |:---: |:---: |:---: |:---: |
-1.0 | Anything with shorts | | | | | 
0.0 | T-Shirt | | | | | 
1.0 | Polo | | | | | 
2.0 | Shirt (untucked) |x| | | | 
2.5 | Shirt (untucked) + dress shoes |x| | | | 
2.8 | Shirt (tucked) + jeans |x|x| | | 
3.0 | Shirt (tucked) + slacks |x|x|x| | 
3.9 | Jacket dressed down  | | | |x| 
4.0 | Shirt + Jacket |x|x|x|x| 
4.1 | Shirt + Tie |x|x|x| |x
4.5 | Jacket + Tie |x|x|x|x|x
5.0  | Matched Suit + Tie |x|x|x|x|x
5.1  | Jacket + Swanky pocket squares etc. |x|x|x|x| 


### Example Usage


```javascript
var dressScaleResult= getDressScaleIndex({
    shorts: false
    , tshirt: false
    , polo: false
    , untuckedDressShirt: false
    , tuckedDressShirt: true
    , dressShoes: false
    , jeans: false
    , slacks: true
    , tie:  false
    , separateJacket: true
    , suitPantsAndJacket: false
    , dapperSwank: false
});

if(dressScaleResult.error) console.log(dressScaleResult.error);
else console.log('Your business dress index is: ' + dressScaleResult.index);
```
