https://stackoverflow.com/a/13968900



select {
  margin: 50px;
  width: 150px;
  padding: 5px 35px 5px 5px;
  font-size: 16px;
  border: 1px solid #CCC;
  height: 34px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(https://stackoverflow.com/favicon.ico) 96% / 15% no-repeat #EEE;
}


/* CAUTION: Internet Explorer hackery ahead */


select::-ms-expand {
    display: none; /* Remove default arrow in Internet Explorer 10 and 11 */
}

/* Target Internet Explorer 9 to undo the custom arrow */
@media screen and (min-width:0\0) {
    select {
        background: none\9;
        padding: 5px\9;
    }
}
<select>
  <option>Apples</option>
  <option selected>Pineapples</option>
  <option>Chocklate</option>
  <option>Pancakes</option>
</select>