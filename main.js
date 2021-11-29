var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","Screenshot (3).png", "Screenshot (24).png", "Screenshot (26).png", "Screenshot (28).png", "IMG_2522.jpeg"];
var names = ["Family Book","The Dey Family", "Deepankar", "Priyanka", "Anushka", "Ayansh"];
var i = 0;
function nextImage(){
  var numbers_of_family_member_in_array = 5
document.getElementById("family_member_image").src=images[i]
document.getElementById("family_member_name").innerHTML=names[i]
i++
if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
}

