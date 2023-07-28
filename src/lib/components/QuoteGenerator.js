import React, { useState, useEffect } from "react"
import styled from "styled-components"

function QuoteGenerator() {
    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")

    const fetchQuote = async () => {
        try {
            const response = await fetch(
                "https://api.quotable.io/quotes/random?maxLength=110",
                {
                    method: "GET",
                }
            )
            const data = await response.json()

            const { content, author } = data[0]
            setQuote(content)
            setAuthor(author)
        } catch (error) {
            console.error("Error fetching quote:", error)
        }
    }

    useEffect(() => {
        fetchQuote()
    }, [])

    const ButtonContainer = styled.div`
        display: flex;
        justify-content: end;
    `

    const Button = styled.button`
        padding-inline: 20px;
        padding-block: 14px;
        margin-inline: 40px;
        background-color: #eeddc7;
        border: 0;
        border-radius: 8px;
        &:hover {
            background-color: #ddbc91;
            cursor: pointer;
        }
    `

    return (
        <div className='quote-container'>
            {quote ? (
                <blockquote>
                    <p>{quote}</p>
                    <cite>{author}</cite>
                </blockquote>
            ) : (
                <p>Loading quote...</p>
            )}
            <ButtonContainer>
                <Button className='regenerate' onClick={fetchQuote}>
                    Regenerate
                </Button>
            </ButtonContainer>
        </div>
    )
}

export default QuoteGenerator
