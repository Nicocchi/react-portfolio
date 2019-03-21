import Prismic from 'prismic-javascript';

/*
 * Action types
 */
export const TEST = "TEST";

export const GET_WORKS = "GET_WORKS";
export const SAVE_WORKS = "SAVE_WORKS";

/*
 * Action creators
 */

/**
 * Test function for boilerplate
 * @returns {Function}
 */
export const testFunction = () => dispatch => {
    dispatch({ type: TEST });
};

/**
 * Retrieve a list of blog posts from Prismic
 * @returns {Function}
 */
export const getBlogPosts = () => dispatch => {
    dispatch({ type: GET_WORKS });

    const apiEndpoint = 'https://jeremys-portfolio.cdn.prismic.io/api/v2';

    Prismic.api(apiEndpoint).then(api => {
        api.query(Prismic.Predicates.at('document.type', 'blog_post')).then(response => {
            if (response) {
                let works = [];
                response.results.forEach(item => {
                    const work = {
                        name: item.data.title[0].text,
                        headerImg: item.data.image.url,
                        tech: "",
                        images: [
                            {
                                src:
                                    "https://i.ibb.co/Cbf6yZH/discord.jpg",
                                altText: "Discord logo",
                                caption: ""
                            }
                        ],
                        desc: item.data.body,
                        sub: "Discord Bot",
                        URL: "https://discordbots.org/bot/506839796921139203",
                        timestamp: item.first_publication_date,
                        id: item.id
                    };
                    works.push(work);
                })

                dispatch({ type: SAVE_WORKS, payload: works });
            }
        });
    });
};