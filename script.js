document.getElementById("sec").addEventListener("click", 
    function() {

        let firstSide = parseInt(document.getElementById("sideFirth").value);
        let secondSide = parseInt(document.getElementById("sideSecond").value);
        let thirdSide = parseInt(document.getElementById("sideThird").value);


        if (isNaN(firstSide) || isNaN(secondSide) || isNaN(thirdSide)) {
           alert("Введите недостающие длины сторон!") 
           return
        }   

        let MaxSide = Math.max.apply(null, [firstSide, secondSide, thirdSide]);
        console.log(MaxSide)

        let sumNoKvad = parseInt(firstSide) + parseInt(secondSide) + parseInt(thirdSide) - MaxSide;
        console.log(sumNoKvad)

        let sum = firstSide**2 + secondSide**2 + thirdSide**2 - MaxSide**2;

        console.log(sum)

        if (firstSide > secondSide + thirdSide || secondSide > firstSide + thirdSide || thirdSide > secondSide + firstSide) {
            alert("Такого треугольника не существует!")
        } else {
            if (MaxSide == sumNoKvad) {
                alert("Треугольник является вырожденным")
            } else if (MaxSide**2 == sum) {
                alert("Треугольник является прямоугольным")
            } else if (MaxSide**2 > sum) {
                alert("Треугольник является тупоугольным")
            } else if (MaxSide**2 < sum) {
                alert("Треугольник является остроугольным")
            }
        }
    }


)