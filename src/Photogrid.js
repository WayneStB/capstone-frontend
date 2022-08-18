import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function TitlebarBelowMasonryImageList() {
    return (
        <Box sx={{ width: 600, overflowY: "scroll" }}>
            <ImageList variant="masonry" cols={4} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            position="circular"
                            title={item.author}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

const itemData = [
    {
        img: "/Photos-001/20210716_025332.jpg",
        title: "Sink",
        author: "Wayne Boyd",
    },
    {
        img: "/Photos-001/20210725_021643.jpg",
        title: "Kitchen",
        author: "Wayne Boyd",
    },
    {
        img: "/Photos-001/20210728_003348.jpg",
        title: "Blinds",
        author: "Wayne Boyd",
    },
    {
        img: "/Photos-001/20211002_025436.jpg",
        title: "Chairs",
        author: "Wayne Boyd",
    },
    {
        img: "/Photos-001/20211006_190309.jpg",
        title: "Laptop",
        author: "Wayne Boyd",
    },
    {
        img: "/Photos-001/Snapchat-70079339.jpg",
        title: "Doors",
        author: "Wayne Boyd",
    },
    {
        img: "/Photos-001/Snapchat-133848445.jpg",
        title: "Coffee",
        author: "Wayne Boyd",
    },
    {
        img: "/Photos-001/Snapchat-446673106.jpg",
        title: "Storage",
        author: "Wayne Boyd",
    },
    {
        img: "/Photos-001/Snapchat-513930123.jpg",
        title: "Candle",
        author: "Wayne Boyd",
    },
    {
        img: "/Photos-001/Snapchat-2024015534.jpg",
        title: "Coffee table",
        author: "Wayne Boyd",
    },
];
