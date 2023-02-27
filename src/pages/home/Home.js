import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import "./home.css";


import { Box, Container, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';

import NewsItem from '../../components/newsItem/NewsItem';
import { GlobalContext } from '../../contexts/GlobalState';
import Slider from '../../components/slider/Slider';

function Home() {
    const [news, setNews] = useState([]);

    const { search } = useContext(GlobalContext)
    // var regex = /deprem/i;
    const slicedNews = news.slice(3);
    let regex = new RegExp(search, 'gi');
    const searchNews = slicedNews.filter((item) => regex.test(item.title))


    const [itemsPerPage, setItemsPerPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastNews = currentPage * itemsPerPage;
    const indexOfFirstNews = indexOfLastNews - itemsPerPage;
    const currentNews = searchNews?.slice(indexOfFirstNews, indexOfLastNews);
    const pageCount = Math.ceil(searchNews?.length / itemsPerPage);



    const api = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=tr&apiKey=676f017549224f488970f1835f9db971')
            .then(function (response) {
                setNews(response.data.articles)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }


    useEffect(() => {
        api()
    }, []);

    const handlePageClick = (event, value) => {
        setCurrentPage(value)
    };


    return (
        <Box>

            <Box
                sx={{
                    mb: { xs: '30px', sm: '100px' }
                }}
            >
                <Slider news={news} />
            </Box>

            <Container>
                {
                    search ?
                        <Box sx={{ display: "flex", pb: "20px", fontSize: "18px" }}>
                            <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>{search}</Typography> : <Typography sx={{ fontSize: "18px", color: "#666", pl: "4px" }}>{currentNews.length < 1 ? (" için sonuç bulunamadı ") : ("için " + currentNews.length + " sonuç bulundu ")}</Typography>

                        </Box>
                        : null
                }
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px',
                    }}
                >
                    {
                        currentNews?.map((item, index) => {

                            return (<NewsItem item={item} key={index} />)
                        })
                    }
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "30px" }}>
                    <Pagination onChange={handlePageClick} count={pageCount} variant="outlined" color="primary" />
                </Box>
            </Container>
        </Box>
    )
}


export default Home