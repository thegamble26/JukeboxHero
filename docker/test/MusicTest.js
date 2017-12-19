$(function () {
    //opening arrays and setting global variables

    var HolidayGenre = [["What movie was ‘Have Yourself a Merry Little Christmas’ written for?", "White Christmas", "Meet Me in St. Louis", "Holiday Inn", "Singing in the Rain"], ["Finish the lyrics:", "Mele Kilikimaka is a thing to say on a bright", "Hawaiian", "Christmas", "day", ], ["What year was the song ‘White Christmas’ first released in?", "1942", "", "", ""], ["‘Silent Night’ was composed in what European country?", "Austria", "", "", ""], ["Which acapella group rose to fame when their rendition of 'The Twelve Days of Christmas' was released on Youtube?", "Straight No Chaser", "Pentatonix", "Phaze 3", "Home Free"]];

    var WorldGenre = [["What video game was Christopher Tin’s ‘Baba Yetu’ written for?", "Total War: Rome", "Sid Meier’s Civilization IV", "Sims 3", "Dead Space"], ["Translate the lyrics:", " Swahili to English for ‘Jenga Imani Yako’?", "Build", "your", "faith", ], ["What year was the song ‘Untraveled Worlds’ first released in?", "2000", "", "", ""], ["‘If We Only Have Love’ has lyrics in English and what other language?", "French", "", "", ""], ["What inspired Eric Whitacre to write ‘Five Hebrew Love Songs’?", "Postcards from his wife", "Money", "Collection of poems", "Letters to his wife"]];

    var SwingGenre = [];

    var CountryGenre = [];

    var TechnoGenre = [];

    var Top40Genre = [];

    var holidayScores = [];
    var top40Scores = [];
    var countryScores = [];
    var technoScores = [];
    var swingScores = [];
    var worldScores = [];
    var allScores = [];

    var user = {
        uName: "",
        finalScore: "",
        cGenre: "",
        testDate: ""
    };

    var userName = "";
    var genre = ""

    var userScore = 0;
    var streakNum = 0
    var streakBonus = 0;

    var correct1;
    var correct2;
    var correct3;
    var correct4;
    var correct5;

    var option1A;
    var option1B;
    var option1C;
    var phrase2;
    var option1D;
    var option5A;
    var option5B;
    var option5C;
    var option5D;

    console.log("this other function started :)");

    $('#userSet').on('click', function () {
        if ($('#uName').val().toLowerCase() === "") {
            alert("Enter User Name");
            uInput += 1;
        }
        if ($('#dateDefault').val() == "") {
            alert("Enter Date");
            uInput += 1;
        }
        console.log("now the button has started :)");
        if ($('#Holiday').prop('checked')) {
            genre = "Holiday";
            $("body").removeClass('');
            $("body").addClass('holiday');
            $('#Quiz').removeClass();
            // use genre array to fill in Q&A
            $('#QuestionOne').append(HolidayGenre[0][0]);
            correct1 = HolidayGenre[0][2];

            // randomizing order of the possible answers, so the order will mix to prevent just memorizing placement
            option1A = HolidayGenre[0][Math.floor(Math.random() * HolidayGenre[0].length)];
            while (option1A == HolidayGenre[0][0]) {
                option1A = HolidayGenre[0][Math.floor(Math.random() * HolidayGenre[0].length)];
            }
            //console.log(option1A);

            option1B = HolidayGenre[0][Math.floor(Math.random() * HolidayGenre[0].length)]
            while (option1B == option1A || option1B == HolidayGenre[0][0]) {
                option1B = HolidayGenre[0][Math.floor(Math.random() * HolidayGenre[0].length)]
            }
            //console.log(option1B);

            option1C = HolidayGenre[0][Math.floor(Math.random() * HolidayGenre[0].length)]
            while (option1C == option1B || option1C == option1A || option1C == HolidayGenre[0][0]) {
                option1C = HolidayGenre[0][Math.floor(Math.random() * HolidayGenre[0].length)]
            }
            //console.log(option1C);

            option1D = HolidayGenre[0][Math.floor(Math.random() * HolidayGenre[0].length)];
            while (option1D == option1C || option1D == option1B || option1D == option1A || option1D == HolidayGenre[0][0]) {
                option1D = HolidayGenre[0][Math.floor(Math.random() * HolidayGenre[0].length)]
            }
            //console.log(option1D);

            // writing to the span in the label while matching the value of the button
            $('#Q1Aspan').append(option1A);
            $('#Q1A').val(option1A);
            $('#Q1Bspan').append(option1B);
            $('#Q1B').val(option1B);
            $('#Q1Cspan').append(option1C);
            $('#Q1C').val(option1C);
            $('#Q1Dspan').append(option1D);
            $('#Q1D').val(option1D);

            $('#QuestionTwo').append(HolidayGenre[1][0]);
            correct2 = HolidayGenre[1][2] + " " + HolidayGenre[1][3] + " " + HolidayGenre[1][4];
            phrase2 = HolidayGenre[1][1];
            $('#Q2hint').append(phrase2);

            for (var i = 0; i < correct2.length; i++) { // how to get more than one dash
                if (correct2[i] == " ") {
                    $('#Q2blanks').append("<br>")
                } else {
                    $('#Q2blanks').append(" __");
                }
            }

            $('#QuestionThree').append(HolidayGenre[2][0]);
            correct3 = HolidayGenre[2][1];

            $('#QuestionFour').append(HolidayGenre[3][0]);
            correct4 = HolidayGenre[3][1];

            for (var i = 0; i < correct4.length; i++) {
                if (i < 1) {
                    $('#Q4blanks').append("__");
                } else {
                    $('#Q4blanks').append(" __");
                }
            }

            $('#QuestionFive').append(HolidayGenre[4][0]);
            correct5 = HolidayGenre[4][1];

            option5A = HolidayGenre[4][Math.floor(Math.random() * HolidayGenre[0].length)];
            while (option5A == HolidayGenre[4][0]) {
                option5A = HolidayGenre[4][Math.floor(Math.random() * HolidayGenre[4].length)];
            }
            //console.log(option5A);

            option5B = HolidayGenre[4][Math.floor(Math.random() * HolidayGenre[4].length)]
            while (option5B == option5A || option5B == HolidayGenre[4][0]) {
                option5B = HolidayGenre[4][Math.floor(Math.random() * HolidayGenre[4].length)]
            }
            //console.log(option5B);

            option5C = HolidayGenre[4][Math.floor(Math.random() * HolidayGenre[4].length)]
            while (option5C == option5B || option5C == option5A || option5C == HolidayGenre[4][0]) {
                option5C = HolidayGenre[4][Math.floor(Math.random() * HolidayGenre[4].length)]
            }
            //console.log(option5C);

            option5D = HolidayGenre[4][Math.floor(Math.random() * HolidayGenre[4].length)];
            while (option5D == option5C || option5D == option5B || option5D == option5A || option5D == HolidayGenre[4][0]) {
                option5D = HolidayGenre[4][Math.floor(Math.random() * HolidayGenre[4].length)]
            }
            //console.log(option5D);

            $('#Q5Aspan').append(option5A);
            $('#Q5A').val(option5A);
            $('#Q5Bspan').append(option5B);
            $('#Q5B').val(option5B);
            $('#Q5Cspan').append(option5C);
            $('#Q5C').val(option5C);
            $('#Q5Dspan').append(option5D);
            $('#Q5D').val(option5D);

        }
        else if ($('#World').prop('checked')) {
            genre = "World";
            $("body").removeClass('starter');
            $("body").addClass('world');
            $('#Quiz').removeClass();
            $('#QuestionOne').append(WorldGenre[0][0]);
            correct1 = WorldGenre[0][2];

            // randomizing order of the possible answers, so the order will mix to prevent just memorizing placement
            option1A = WorldGenre[0][Math.floor(Math.random() * WorldGenre[0].length)];
            while (option1A == WorldGenre[0][0]) {
                option1A = WorldGenre[0][Math.floor(Math.random() * WorldGenre[0].length)];
            }
            //console.log(option1A);

            option1B = WorldGenre[0][Math.floor(Math.random() * WorldGenre[0].length)]
            while (option1B == option1A || option1B == WorldGenre[0][0]) {
                option1B = WorldGenre[0][Math.floor(Math.random() * WorldGenre[0].length)]
            }
            //console.log(option1B);

            option1C = WorldGenre[0][Math.floor(Math.random() * WorldGenre[0].length)]
            while (option1C == option1B || option1C == option1A || option1C == WorldGenre[0][0]) {
                option1C = WorldGenre[0][Math.floor(Math.random() * WorldGenre[0].length)]
            }
            //console.log(option1C);

            option1D = WorldGenre[0][Math.floor(Math.random() * WorldGenre[0].length)];
            while (option1D == option1C || option1D == option1B || option1D == option1A || option1D == WorldGenre[0][0]) {
                option1D = WorldGenre[0][Math.floor(Math.random() * WorldGenre[0].length)]
            }
            //console.log(option1D);

            // writing to the span in the label while matching the value of the button
            $('#Q1Aspan').append(option1A);
            $('#Q1A').val(option1A);
            $('#Q1Bspan').append(option1B);
            $('#Q1B').val(option1B);
            $('#Q1Cspan').append(option1C);
            $('#Q1C').val(option1C);
            $('#Q1Dspan').append(option1D);
            $('#Q1D').val(option1D);

            $('#QuestionTwo').append(WorldGenre[1][0]);
            correct2 = WorldGenre[1][2] + " " + WorldGenre[1][3] + " " + WorldGenre[1][4];
            phrase2 = WorldGenre[1][1];
            $('#Q2hint').append(phrase2);

            for (var i = 0; i < correct2.length; i++) { // how to get more than one dash
                if (correct2[i] == " ") {
                    $('#Q2blanks').append("<br>")
                } else {
                    $('#Q2blanks').append(" __");
                }
            }

            $('#QuestionThree').append(WorldGenre[2][0]);
            correct3 = WorldGenre[2][1];

            $('#QuestionFour').append(WorldGenre[3][0]);
            correct4 = WorldGenre[3][1];

            for (var i = 0; i < correct4.length; i++) {
                if (i < 1) {
                    $('#Q4blanks').append("__");
                } else {
                    $('#Q4blanks').append(" __");
                }
            }

            $('#QuestionFive').append(WorldGenre[4][0]);
            correct5 = WorldGenre[4][1];

            option5A = WorldGenre[4][Math.floor(Math.random() * WorldGenre[0].length)];
            while (option5A == WorldGenre[4][0]) {
                option5A = WorldGenre[4][Math.floor(Math.random() * WorldGenre[4].length)];
            }
            //console.log(option5A);

            option5B = WorldGenre[4][Math.floor(Math.random() * WorldGenre[4].length)]
            while (option5B == option5A || option5B == WorldGenre[4][0]) {
                option5B = WorldGenre[4][Math.floor(Math.random() * WorldGenre[4].length)]
            }
            //console.log(option5B);

            option5C = WorldGenre[4][Math.floor(Math.random() * WorldGenre[4].length)]
            while (option5C == option5B || option5C == option5A || option5C == WorldGenre[4][0]) {
                option5C = WorldGenre[4][Math.floor(Math.random() * WorldGenre[4].length)]
            }
            //console.log(option5C);

            option5D = WorldGenre[4][Math.floor(Math.random() * WorldGenre[4].length)];
            while (option5D == option5C || option5D == option5B || option5D == option5A || option5D == WorldGenre[4][0]) {
                option5D = WorldGenre[4][Math.floor(Math.random() * WorldGenre[4].length)]
            }
            //console.log(option5D);

            $('#Q5Aspan').append(option5A);
            $('#Q5A').val(option5A);
            $('#Q5Bspan').append(option5B);
            $('#Q5B').val(option5B);
            $('#Q5Cspan').append(option5C);
            $('#Q5C').val(option5C);
            $('#Q5Dspan').append(option5D);
            $('#Q5D').val(option5D);
        } else if ($('#Swing').prop('checked')) {

            genre = "Swing";
            $("body").removeClass('starter');
            $("body").addClass('swing');
            $('#Quiz').removeClass();
            $('#QuestionOne').append(SwingGenre[0][0]);
            correct1 = SwingGenre[0][2];

            // randomizing order of the possible answers, so the order will mix to prevent just memorizing placement
            option1A = SwingGenre[0][Math.floor(Math.random() * SwingGenre[0].length)];
            while (option1A == SwingGenre[0][0]) {
                option1A = SwingGenre[0][Math.floor(Math.random() * SwingGenre[0].length)];
            }
            //console.log(option1A);

            option1B = SwingGenre[0][Math.floor(Math.random() * SwingGenre[0].length)]
            while (option1B == option1A || option1B == SwingGenre[0][0]) {
                option1B = SwingGenre[0][Math.floor(Math.random() * SwingGenre[0].length)]
            }
            //console.log(option1B);

            option1C = SwingGenre[0][Math.floor(Math.random() * SwingGenre[0].length)]
            while (option1C == option1B || option1C == option1A || option1C == SwingGenre[0][0]) {
                option1C = SwingGenre[0][Math.floor(Math.random() * SwingGenre[0].length)]
            }
            //console.log(option1C);

            option1D = SwingGenre[0][Math.floor(Math.random() * SwingGenre[0].length)];
            while (option1D == option1C || option1D == option1B || option1D == option1A || option1D == SwingGenre[0][0]) {
                option1D = SwingGenre[0][Math.floor(Math.random() * SwingGenre[0].length)]
            }
            //console.log(option1D);

            // writing to the span in the label while matching the value of the button
            $('#Q1Aspan').append(option1A);
            $('#Q1A').val(option1A);
            $('#Q1Bspan').append(option1B);
            $('#Q1B').val(option1B);
            $('#Q1Cspan').append(option1C);
            $('#Q1C').val(option1C);
            $('#Q1Dspan').append(option1D);
            $('#Q1D').val(option1D);

            $('#QuestionTwo').append(SwingGenre[1][0]);
            correct2 = SwingGenre[1][2] + " " + SwingGenre[1][3] + " " + SwingGenre[1][4];
            phrase2 = SwingGenre[1][1];
            $('#Q2hint').append(phrase2);

            for (var i = 0; i < correct2.length; i++) { // how to get more than one dash
                if (correct2[i] == " ") {
                    $('#Q2blanks').append("<br>")
                } else {
                    $('#Q2blanks').append(" __");
                }
            }

            $('#QuestionThree').append(SwingGenre[2][0]);
            correct3 = SwingGenre[2][1];

            $('#QuestionFour').append(SwingGenre[3][0]);
            correct4 = SwingGenre[3][1];

            for (var i = 0; i < correct4.length; i++) {
                if (i < 1) {
                    $('#Q4blanks').append("__");
                } else {
                    $('#Q4blanks').append(" __");
                }
            }

            $('#QuestionFive').append(SwingGenre[4][0]);
            correct5 = SwingGenre[4][1];

            option5A = SwingGenre[4][Math.floor(Math.random() * SwingGenre[0].length)];
            while (option5A == SwingGenre[4][0]) {
                option5A = SwingGenre[4][Math.floor(Math.random() * SwingGenre[4].length)];
            }
            //console.log(option5A);

            option5B = SwingGenre[4][Math.floor(Math.random() * SwingGenre[4].length)]
            while (option5B == option5A || option5B == SwingGenre[4][0]) {
                option5B = SwingGenre[4][Math.floor(Math.random() * SwingGenre[4].length)]
            }
            //console.log(option5B);

            option5C = SwingGenre[4][Math.floor(Math.random() * SwingGenre[4].length)]
            while (option5C == option5B || option5C == option5A || option5C == SwingGenre[4][0]) {
                option5C = SwingGenre[4][Math.floor(Math.random() * SwingGenre[4].length)]
            }
            //console.log(option5C);

            option5D = SwingGenre[4][Math.floor(Math.random() * SwingGenre[4].length)];
            while (option5D == option5C || option5D == option5B || option5D == option5A || option5D == SwingGenre[4][0]) {
                option5D = SwingGenre[4][Math.floor(Math.random() * SwingGenre[4].length)]
            }
            //console.log(option5D);

            $('#Q5Aspan').append(option5A);
            $('#Q5A').val(option5A);
            $('#Q5Bspan').append(option5B);
            $('#Q5B').val(option5B);
            $('#Q5Cspan').append(option5C);
            $('#Q5C').val(option5C);
            $('#Q5Dspan').append(option5D);
            $('#Q5D').val(option5D);
        }
        else if ($('#Techno').prop('checked')) {

            genre = "Techno";
            $("body").removeClass('starter');
            $("body").addClass('techno');
            $('#Quiz').removeClass();
            $('#QuestionOne').append(TechnoGenre[0][0]);
            correct1 = TechnoGenre[0][2];

            // randomizing order of the possible answers, so the order will mix to prevent just memorizing placement
            option1A = TechnoGenre[0][Math.floor(Math.random() * TechnoGenre[0].length)];
            while (option1A == TechnoGenre[0][0]) {
                option1A = TechnoGenre[0][Math.floor(Math.random() * TechnoGenre[0].length)];
            }
            //console.log(option1A);

            option1B = TechnoGenre[0][Math.floor(Math.random() * TechnoGenre[0].length)]
            while (option1B == option1A || option1B == TechnoGenre[0][0]) {
                option1B = TechnoGenre[0][Math.floor(Math.random() * TechnoGenre[0].length)]
            }
            //console.log(option1B);

            option1C = TechnoGenre[0][Math.floor(Math.random() * TechnoGenre[0].length)]
            while (option1C == option1B || option1C == option1A || option1C == TechnoGenre[0][0]) {
                option1C = TechnoGenre[0][Math.floor(Math.random() * TechnoGenre[0].length)]
            }
            //console.log(option1C);

            option1D = TechnoGenre[0][Math.floor(Math.random() * TechnoGenre[0].length)];
            while (option1D == option1C || option1D == option1B || option1D == option1A || option1D == TechnoGenre[0][0]) {
                option1D = TechnoGenre[0][Math.floor(Math.random() * TechnoGenre[0].length)]
            }
            //console.log(option1D);

            // writing to the span in the label while matching the value of the button
            $('#Q1Aspan').append(option1A);
            $('#Q1A').val(option1A);
            $('#Q1Bspan').append(option1B);
            $('#Q1B').val(option1B);
            $('#Q1Cspan').append(option1C);
            $('#Q1C').val(option1C);
            $('#Q1Dspan').append(option1D);
            $('#Q1D').val(option1D);

            $('#QuestionTwo').append(TechnoGenre[1][0]);
            correct2 = TechnoGenre[1][2] + " " + TechnoGenre[1][3] + " " + TechnoGenre[1][4];
            phrase2 = TechnoGenre[1][1];
            $('#Q2hint').append(phrase2);

            for (var i = 0; i < correct2.length; i++) { // how to get more than one dash
                if (correct2[i] == " ") {
                    $('#Q2blanks').append("<br>")
                } else {
                    $('#Q2blanks').append(" __");
                }
            }

            $('#QuestionThree').append(TechnoGenre[2][0]);
            correct3 = TechnoGenre[2][1];

            $('#QuestionFour').append(TechnoGenre[3][0]);
            correct4 = TechnoGenre[3][1];

            for (var i = 0; i < correct4.length; i++) {
                if (i < 1) {
                    $('#Q4blanks').append("__");
                } else {
                    $('#Q4blanks').append(" __");
                }
            }

            $('#QuestionFive').append(TechnoGenre[4][0]);
            correct5 = TechnoGenre[4][1];

            option5A = TechnoGenre[4][Math.floor(Math.random() * TechnoGenre[0].length)];
            while (option5A == TechnoGenre[4][0]) {
                option5A = TechnoGenre[4][Math.floor(Math.random() * TechnoGenre[4].length)];
            }
            //console.log(option5A);

            option5B = TechnoGenre[4][Math.floor(Math.random() * TechnoGenre[4].length)]
            while (option5B == option5A || option5B == TechnoGenre[4][0]) {
                option5B = TechnoGenre[4][Math.floor(Math.random() * TechnoGenre[4].length)]
            }
            //console.log(option5B);

            option5C = TechnoGenre[4][Math.floor(Math.random() * TechnoGenre[4].length)]
            while (option5C == option5B || option5C == option5A || option5C == TechnoGenre[4][0]) {
                option5C = TechnoGenre[4][Math.floor(Math.random() * TechnoGenre[4].length)]
            }
            //console.log(option5C);

            option5D = TechnoGenre[4][Math.floor(Math.random() * TechnoGenre[4].length)];
            while (option5D == option5C || option5D == option5B || option5D == option5A || option5D == TechnoGenre[4][0]) {
                option5D = TechnoGenre[4][Math.floor(Math.random() * TechnoGenre[4].length)]
            }
            //console.log(option5D);

            $('#Q5Aspan').append(option5A);
            $('#Q5A').val(option5A);
            $('#Q5Bspan').append(option5B);
            $('#Q5B').val(option5B);
            $('#Q5Cspan').append(option5C);
            $('#Q5C').val(option5C);
            $('#Q5Dspan').append(option5D);
            $('#Q5D').val(option5D);
        }
        else if ($('#Country').prop('checked')) {
            genre = "Country";
            $("body").removeClass('starter');
            $("body").addClass('country');
            $('#Quiz').removeClass();
            $('#QuestionOne').append(CountryGenre[0][0]);
            correct1 = CountryGenre[0][2];

            // randomizing order of the possible answers, so the order will mix to prevent just memorizing placement
            option1A = CountryGenre[0][Math.floor(Math.random() * CountryGenre[0].length)];
            while (option1A == CountryGenre[0][0]) {
                option1A = CountryGenre[0][Math.floor(Math.random() * CountryGenre[0].length)];
            }
            //console.log(option1A);

            option1B = CountryGenre[0][Math.floor(Math.random() * CountryGenre[0].length)]
            while (option1B == option1A || option1B == CountryGenre[0][0]) {
                option1B = CountryGenre[0][Math.floor(Math.random() * CountryGenre[0].length)]
            }
            //console.log(option1B);

            option1C = CountryGenre[0][Math.floor(Math.random() * CountryGenre[0].length)]
            while (option1C == option1B || option1C == option1A || option1C == CountryGenre[0][0]) {
                option1C = CountryGenre[0][Math.floor(Math.random() * CountryGenre[0].length)]
            }
            //console.log(option1C);

            option1D = CountryGenre[0][Math.floor(Math.random() * CountryGenre[0].length)];
            while (option1D == option1C || option1D == option1B || option1D == option1A || option1D == CountryGenre[0][0]) {
                option1D = CountryGenre[0][Math.floor(Math.random() * CountryGenre[0].length)]
            }
            //console.log(option1D);

            // writing to the span in the label while matching the value of the button
            $('#Q1Aspan').append(option1A);
            $('#Q1A').val(option1A);
            $('#Q1Bspan').append(option1B);
            $('#Q1B').val(option1B);
            $('#Q1Cspan').append(option1C);
            $('#Q1C').val(option1C);
            $('#Q1Dspan').append(option1D);
            $('#Q1D').val(option1D);

            $('#QuestionTwo').append(CountryGenre[1][0]);
            correct2 = CountryGenre[1][2] + " " + CountryGenre[1][3] + " " + CountryGenre[1][4];
            phrase2 = CountryGenre[1][1];
            $('#Q2hint').append(phrase2);

            for (var i = 0; i < correct2.length; i++) { // how to get more than one dash
                if (correct2[i] == " ") {
                    $('#Q2blanks').append("<br>")
                } else {
                    $('#Q2blanks').append(" __");
                }
            }

            $('#QuestionThree').append(CountryGenre[2][0]);
            correct3 = CountryGenre[2][1];

            $('#QuestionFour').append(CountryGenre[3][0]);
            correct4 = CountryGenre[3][1];

            for (var i = 0; i < correct4.length; i++) {
                if (i < 1) {
                    $('#Q4blanks').append("__");
                } else {
                    $('#Q4blanks').append(" __");
                }
            }

            $('#QuestionFive').append(CountryGenre[4][0]);
            correct5 = CountryGenre[4][1];

            option5A = CountryGenre[4][Math.floor(Math.random() * CountryGenre[0].length)];
            while (option5A == CountryGenre[4][0]) {
                option5A = CountryGenre[4][Math.floor(Math.random() * CountryGenre[4].length)];
            }
            //console.log(option5A);

            option5B = CountryGenre[4][Math.floor(Math.random() * CountryGenre[4].length)]
            while (option5B == option5A || option5B == CountryGenre[4][0]) {
                option5B = CountryGenre[4][Math.floor(Math.random() * CountryGenre[4].length)]
            }
            //console.log(option5B);

            option5C = CountryGenre[4][Math.floor(Math.random() * CountryGenre[4].length)]
            while (option5C == option5B || option5C == option5A || option5C == CountryGenre[4][0]) {
                option5C = CountryGenre[4][Math.floor(Math.random() * CountryGenre[4].length)]
            }
            //console.log(option5C);

            option5D = CountryGenre[4][Math.floor(Math.random() * CountryGenre[4].length)];
            while (option5D == option5C || option5D == option5B || option5D == option5A || option5D == CountryGenre[4][0]) {
                option5D = CountryGenre[4][Math.floor(Math.random() * CountryGenre[4].length)]
            }
            //console.log(option5D);

            $('#Q5Aspan').append(option5A);
            $('#Q5A').val(option5A);
            $('#Q5Bspan').append(option5B);
            $('#Q5B').val(option5B);
            $('#Q5Cspan').append(option5C);
            $('#Q5C').val(option5C);
            $('#Q5Dspan').append(option5D);
            $('#Q5D').val(option5D);
        }
        else if ($('#top40').prop('checked')) {
            genre = "Top 40";
            $("body").removeClass('starter');
            $("body").addClass('top40');
            $('#Quiz').removeClass();
            $('#QuestionOne').append(Top40Genre[0][0]);
            correct1 = Top40Genre[0][2];

            // randomizing order of the possible answers, so the order will mix to prevent just memorizing placement
            option1A = Top40Genre[0][Math.floor(Math.random() * Top40Genre[0].length)];
            while (option1A == Top40Genre[0][0]) {
                option1A = Top40Genre[0][Math.floor(Math.random() * Top40Genre[0].length)];
            }
            //console.log(option1A);

            option1B = Top40Genre[0][Math.floor(Math.random() * Top40Genre[0].length)]
            while (option1B == option1A || option1B == Top40Genre[0][0]) {
                option1B = Top40Genre[0][Math.floor(Math.random() * Top40Genre[0].length)]
            }
            //console.log(option1B);

            option1C = Top40Genre[0][Math.floor(Math.random() * Top40Genre[0].length)]
            while (option1C == option1B || option1C == option1A || option1C == Top40Genre[0][0]) {
                option1C = HolidayGenre[0][Math.floor(Math.random() * HolidayGenre[0].length)]
            }
            //console.log(option1C);

            option1D = Top40Genre[0][Math.floor(Math.random() * Top40Genre[0].length)];
            while (option1D == option1C || option1D == option1B || option1D == option1A || option1D == Top40Genre[0][0]) {
                option1D = Top40Genre[0][Math.floor(Math.random() * Top40Genre[0].length)]
            }
            //console.log(option1D);

            // writing to the span in the label while matching the value of the button
            $('#Q1Aspan').append(option1A);
            $('#Q1A').val(option1A);
            $('#Q1Bspan').append(option1B);
            $('#Q1B').val(option1B);
            $('#Q1Cspan').append(option1C);
            $('#Q1C').val(option1C);
            $('#Q1Dspan').append(option1D);
            $('#Q1D').val(option1D);

            $('#QuestionTwo').append(Top40Genre[1][0]);
            correct2 = Top40Genre[1][2] + " " + Top40Genre[1][3] + " " + Top40Genre[1][4];
            phrase2 = Top40Genre[1][1];
            $('#Q2hint').append(phrase2);

            for (var i = 0; i < correct2.length; i++) { // how to get more than one dash
                if (correct2[i] == " ") {
                    $('#Q2blanks').append("<br>")
                } else {
                    $('#Q2blanks').append(" __");
                }
            }

            $('#QuestionThree').append(Top40Genre[2][0]);
            correct3 = HolidayGenre[2][1];

            $('#QuestionFour').append(Top40Genre[3][0]);
            correct4 = HolidayGenre[3][1];

            for (var i = 0; i < correct4.length; i++) {
                if (i < 1) {
                    $('#Q4blanks').append("__");
                } else {
                    $('#Q4blanks').append(" __");
                }
            }

            $('#QuestionFive').append(Top40Genre[4][0]);
            correct5 = Top40Genre[4][1];

            option5A = Top40Genre[4][Math.floor(Math.random() * Top40Genre[0].length)];
            while (option5A == Top40Genre[4][0]) {
                option5A = Top40Genre[4][Math.floor(Math.random() * Top40Genre[4].length)];
            }
            //console.log(option5A);

            option5B = Top40Genre[4][Math.floor(Math.random() * Top40Genre[4].length)]
            while (option5B == option5A || option5B == Top40Genre[4][0]) {
                option5B = Top40Genre[4][Math.floor(Math.random() * Top40Genre[4].length)]
            }
            //console.log(option5B);

            option5C = Top40Genre[4][Math.floor(Math.random() * Top40Genre[4].length)]
            while (option5C == option5B || option5C == option5A || option5C == Top40Genre[4][0]) {
                option5C = HolidayGenre[4][Math.floor(Math.random() * HolidayGenre[4].length)]
            }
            //console.log(option5C);

            option5D = Top40Genre[4][Math.floor(Math.random() * Top40Genre[4].length)];
            while (option5D == option5C || option5D == option5B || option5D == option5A || option5D == Top40Genre[4][0]) {
                option5D = Top40Genre[4][Math.floor(Math.random() * Top40Genre[4].length)]
            }
            //console.log(option5D);

            $('#Q5Aspan').append(option5A);
            $('#Q5A').val(option5A);
            $('#Q5Bspan').append(option5B);
            $('#Q5B').val(option5B);
            $('#Q5Cspan').append(option5C);
            $('#Q5C').val(option5C);
            $('#Q5Dspan').append(option5D);
            $('#Q5D').val(option5D);
        }
        else {
            alert("Select Genre to Continue");
        }

            $("#tab-container").easytabs('select', 'Quiz');

    });

    $('#submitQ1').on('click', function () {
        if ($('#Q1A').prop('checked') && $('#Q1A').val() == correct1) {
            userScore += 10;
            streakNum += 1;
            // alert("correct");
        } else if ($('#Q1B').prop('checked') && $('#Q1B').val() == correct1) {
            userScore += 10;
            streakNum += 1;
            // alert("correct");
        } else if ($('#Q1C').prop('checked') && $('#Q1C').val() == correct1) {
            userScore += 10;
            streakNum += 1;
            // alert("correct");
        } else if ($('#Q1D').prop('checked') && $('#Q1D').val() == correct1) {
            userScore += 10;
            streakNum += 1;
            // alert("correct");
        } else {
            streakNum = 0
            // alert("incorrect");
        }
        console.log(userScore, streakNum);
        $('#submitQ1').addClass('disabled');
    });

    $('#submitQ2').on('click', function () {
        console.log(correct2.toLowerCase());
        console.log($('#Q2input').val().toLowerCase());
        if ($('#Q2input').val().toLowerCase() === correct2.toLowerCase()) {
            // alert("correct")
            userScore += 10;
            streakNum += 1;
            streakBonus = streakNum * 10;
            userScore = userScore + streakBonus;
        } else {
            //    alert("incorrect");
            streakNum = 0;
        }
        console.log(userScore, streakNum);
        $('#submitQ2').addClass('disabled');
    });

    $('#submitQ3').on('click', function () {
        console.log(correct3);
        console.log($('#Q3input').val());
        if ($('#Q3input').val() == correct3) {
            // alert("correct")
            userScore += 10;
            streakNum += 1;
            streakBonus = streakNum * 10;
            userScore = userScore + streakBonus;
        } else {
            // alert("incorrect");
            streakNum = 0;
        }
        console.log(userScore, streakNum);
        $('#submitQ3').addClass('disabled');
    });

    $('#submitQ4').on('click', function () {
        console.log(correct4);
        console.log($('#Q4input').val());
        if ($('#Q4input').val().toLowerCase() == correct4.toLowerCase()) {
            //   alert("correct");
            userScore += 10;
            streakNum += 1;
            streakBonus = streakNum * 10;
            userScore = userScore + streakBonus;
        } else {
            //  alert("incorrect");
            streakNum = 0;
        }
        console.log(userScore, streakNum);
        $('#submitQ4').addClass('disabled');
    });

    $('#submitQ5').on('click', function () {
        if ($('#Q5A').prop('checked') && $('#Q5A').val() == correct5) {
            userScore += 10;
            streakNum += 1;
            streakBonus = streakNum * 10;
            userScore = userScore + streakBonus;
            // alert("correct");
        } else if ($('#Q5B').prop('checked') && $('#Q5B').val() == correct5) {
            userScore += 10;
            streakNum += 1;
            streakBonus = streakNum * 10;
            userScore = userScore + streakBonus;
            //  alert("correct");
        } else if ($('#Q5C').prop('checked') && $('#Q5C').val() == correct5) {
            userScore += 10;
            streakNum += 1;
            streakBonus = streakNum * 10;
            userScore = userScore + streakBonus;
            // alert("correct");
        } else if ($('#Q5D').prop('checked') && $('#Q5D').val() == correct5) {
            userScore += 10;
            streakNum += 1;
            streakBonus = streakNum * 10;
            userScore = userScore + streakBonus;
            // alert("correct");
        } else {
            streakNum = 0
            // alert("incorrect");
        }
        console.log(userScore, streakNum);
        $('#submitQ5').addClass('disabled');
    });

    $('#submitAll').on('click', function () {
        // input current user into object
        user.uName = $('#uName').val();
        user.cGenre = genre;
        user.testDate = $('#dateDefault').val();
        user.finalScore = userScore;


        if ($('#Holiday').prop('checked')) {
            holidayScores.push(jQuery.extend(true, {}, user));
            console.log("pushed to Holiday");

            // sort array of scores
            var numPasses = 1;
            do {
                var swapped = false;
                for (var i = 0; i < holidayScores.length - numPasses; i++) {
                    if (holidayScores[i].finalScore < holidayScores[i + 1].finalScore) {
                        //swap books
                        var temp = holidayScores[i];
                        holidayScores[i] = holidayScores[i + 1];
                        holidayScores[i + 1] = temp;
                        swapped = true;
                    }
                }
                numPasses += 1;
            } while (swapped);

            // show top scores
            for (var i = 0; i < holidayScores.length; i++) {
                $('#scoreGenre').append(holidayScores[i].uName + " " + holidayScores[i].finalScore + " " + holidayScores[i].cGenre + " " + holidayScores[i].testDate + "<br>");
            }
        } else if ($('#World').prop('checked')) {
            worldScores.push(jQuery.extend(true, {}, user));
            console.log("pushed to World");

            var numPasses = 1;
            do {
                var swapped = false;
                for (var i = 0; i < worldScores.length - numPasses; i++) {
                    if (worldScores[i].finalScore < worldScores[i + 1].finalScore) {
                        //swap books
                        var temp = worldScores[i];
                        worldScores[i] = worldScores[i + 1];
                        worldScores[i + 1] = temp;
                        swapped = true;
                    }
                }
                numPasses += 1;
            } while (swapped);

            for (var i = 0; i < worldScores.length; i++) {
                $('#scoreGenre').append(worldScores[i].uName + " " + worldScores[i].finalScore + " " + worldScores[i].cGenre + " " + worldScores[i].testDate + "<br>");
            }

        } else if ($('#Swing').prop('checked')) {
            swingScores.push(jQuery.extend(true, {}, user));
            console.log("pushed to Swing");

            // sort array of scores
            var numPasses = 1;
            do {
                var swapped = false;
                for (var i = 0; i < swingScores.length - numPasses; i++) {
                    if (swingScores[i].finalScore < swingScores[i + 1].finalScore) {
                        //swap books
                        var temp = swingScores[i];
                        swingScores[i] = swingScores[i + 1];
                        swingScores[i + 1] = temp;
                        swapped = true;
                    }
                }
                numPasses += 1;
            } while (swapped);

            for (var i = 0; i < swingScores.length; i++) {
                $('#scoreGenre').append(swingScores[i].uName + " " + swingScores[i].finalScore + " " + swingScores[i].cGenre + " " + swingScores[i].testDate + "<br>");
            }

        } else if ($('#Techno').prop('checked')) {
            technoScores.push(jQuery.extend(true, {}, user));
            console.log("pushed to Techno");

            // sort array of scores
            var numPasses = 1;
            do {
                var swapped = false;
                for (var i = 0; i < technoScores.length - numPasses; i++) {
                    if (technoScores[i].finalScore < technoScores[i + 1].finalScore) {
                        //swap books
                        var temp = technoScores[i];
                        technoScores[i] = technoScores[i + 1];
                        technoScores[i + 1] = temp;
                        swapped = true;
                    }
                }
                numPasses += 1;
            } while (swapped);

            for (var i = 0; i < technoScores.length; i++) {
                $('#scoreGenre').append(technoScores[i].uName + " " + technoScores[i].finalScore + " " + technoScores[i].cGenre + " " + technoScores[i].testDate + "<br>");
            }

        } else if ($('#Country').prop('checked')) {
            countryScores.push(jQuery.extend(true, {}, user));
            console.log("pushed to Country");

            // sort array of scores
            var numPasses = 1;
            do {
                var swapped = false;
                for (var i = 0; i < countryScores.length - numPasses; i++) {
                    if (countryScores[i].finalScore < countryScores[i + 1].finalScore) {
                        //swap books
                        var temp = countryScores[i];
                        countryScores[i] = countryScores[i + 1];
                        countryScores[i + 1] = temp;
                        swapped = true;
                    }
                }
                numPasses += 1;
            } while (swapped);

            for (var i = 0; i < countryScores.length; i++) {
                $('#scoreGenre').append(countryScores[i].uName + " " + countryScores[i].finalScore + " " + countryScores[i].cGenre + " " + countryScores[i].testDate + "<br>");
            }

        } else if ($('#top40').prop('checked')) {
            top40Scores.push(jQuery.extend(true, {}, user));
            console.log("pushed to Top 40")

            // sort array of scores
            var numPasses = 1;
            do {
                var swapped = false;
                for (var i = 0; i < top40Scores.length - numPasses; i++) {
                    if (top40Scores[i].finalScore < top40Scores[i + 1].finalScore) {
                        //swap books
                        var temp = top40Scores[i];
                        top40Scores[i] = top40Scores[i + 1];
                        top40Scores[i + 1] = temp;
                        swapped = true;
                    }
                }
                numPasses += 1;
            } while (swapped);

            for (var i = 0; i < top40Scores.length; i++) {
                $('#scoreGenre').append(top40Scores[i].uName + " " + top40Scores[i].finalScore + " " + top40Scores[i].cGenre + " " + top40Scores[i].testDate + "<br>");
            }

        }

        allScores.push(jQuery.extend(true, {}, user));

        console.log("pushed to total");
        var numPasses = 1;
        do {
            var swapped = false;
            for (var i = 0; i < allScores.length - numPasses; i++) {
                if (allScores[i].finalScore < allScores[i + 1].finalScore) {
                    //swap books
                    var temp = allScores[i];
                    allScores[i] = allScores[i + 1];
                    allScores[i + 1] = temp;
                    swapped = true;
                }
            }
            numPasses += 1;
        } while (swapped);

        console.log(allScores.length);
        console.log(allScores[0].uName);
        //var i=0;
        for (var i = 0; i < allScores.length; i++) {
            //console.log(allScores[i].uName);
            //console.log(allScores[i].finalScore);
            //console.log(allScores[i].cGenre);
            //console.log(allScores[i].testDate);
            $('#scoreAllTime').append(allScores[i].uName + " " + allScores[i].finalScore + " " + allScores[i].cGenre + " " + allScores[i].testDate + "<br>");
            //}
            $("#tab-container").easytabs('select', 'Results');
        }

        $('#playAgain').on('click', function () {
            // clear everything except the score arrays for next player
            document.getElementById("userForm").reset();
            document.getElementById("quizForm").reset();
            $('#QuestionOne').text('');
            $('#Q1Aspan').text('');
            $('#Q1Bspan').text('');
            $('#Q1Cspan').text('');
            $('#Q1Dspan').text('');

            $('#QuestionTwo').text('');
            $('#Q2hint').text('');
            $('#Q2blanks').text('');
            $('#Q2input').text('');

            $('#QuestionThree').text('');
            $('#Q3input').text('');

            $('#QuestionFour').text('');
            $('#Q4blanks').text('');
            $('#Q4input').text('');

            $('#QuestionFive').text('');
            $('#Q5Aspan').text('');
            $('#Q5Bspan').text('');
            $('#Q5Cspan').text('');
            $('#Q5Dspan').text('');

            $('.submitQ').removeClass('disabled');

            $('#scoreGenre').text('');
            $('#scoreAllTime').text('');

            $("body").removeClass();

            userScore = 0
            $("#tab-container").easytabs('select', 'UserInfo');
        });

    });
});
