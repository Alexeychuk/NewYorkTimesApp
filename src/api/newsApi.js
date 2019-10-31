import axios from 'axios';

axios.defaults.baseURL = 'https://api.nytimes.com';
const API_KEY = 'C6GGi8KZw3trJ9WVgug7nXkDN7bpGOn9';

export const getNews = () => {
  return axios
    .get(`/svc/topstories/v2/home.json?api-key=${API_KEY}`)
    .then(response => {
      // console.log(response);
      return {
        articles: response.data.results.map(doc => ({
          section: doc.section,
          title: doc.title,
          url: doc.url,
          date: doc.published_date,
          multimedia: doc.multimedia,
        })),
      };
    })
    .catch(err => console.log(err));
};

export const getQueryArcticles = (query, page = 1) => {
  return axios
    .get(
      `/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}&page=${page}`,
    )
    .then(response => {
      // console.log(response);
      return {
        articles: response.data.response.docs.map(doc => ({
          section: doc.section_name,
          title: doc.headline.main,
          url: doc.web_url,
          date: doc.pub_date,
          multimedia: doc.multimedia,
        })),
      };
    })
    .catch(err => console.log(err));
};

export const getCategoryArcticles = category => {
  return axios
    .get(`/svc/topstories/v2/${category}.json?api-key=${API_KEY}`)
    .then(response => {
      // console.log(response);
      return {
        articles: response.data.results.map(doc => ({
          section: doc.section,
          title: doc.title,
          url: doc.url,
          date: doc.published_date,
          multimedia: doc.multimedia,
        })),
        category: response.data.section,
      };
    })
    .catch(err => console.log(err));
};

// https://api.nytimes.com/svc/topstories/v2/science.json?api-key=yourkey

// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=obama&api-key=C6GGi8KZw3trJ9WVgug7nXkDN7bpGOn9&page=1
