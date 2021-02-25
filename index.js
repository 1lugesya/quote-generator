const yaziAlani = document.getElementById("quote");
            const fetchKanye = () => {
                fetch("https://api.kanye.rest")
                    .then((response) => response.json())
                    .then((data) => {
                        yaziAlani.innerHTML = data.quote;
                        const text = data.quote;
                        const tweetLine = `https://twitter.com/intent/tweet?text=${text}`;
                        document.querySelector("#twitter>a").href = tweetLine;


        } );
            };

        