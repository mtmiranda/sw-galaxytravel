import React, { useEffect, useState } from 'react'
import { Content, DashboardWrapper, Cards, Card } from './style'
import moment from 'moment'

import { api } from '../../config/api'
import SearchBar from '../SearchBar'

function Dashboard() {
    const [starships, setStarships] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [isVisible, setIsVisible] = useState(true)

    const onchange = (value) => {
        setSearchValue(value)
    }

    const consumablesConverted = (consumables) => {
        const [yearNumber, yearText] = consumables.split(' ')
        const consumablesInHours = moment
            .duration(yearNumber, yearText)
            .asHours()
        return consumablesInHours
    }

    const calculateStops = (distance, mglt, consumables) => {
        const hours = distance / mglt
        const consumableHours = consumablesConverted(consumables)
        const stops = hours / consumableHours
        return Math.floor(stops)
    }

    const handleSearchButton = (event) => {
        event.preventDefault()
        if (!Number(searchValue)) {
            const message = 'Not a number, please insert a valid distance :)'
            alert(message)
            return
        }
        const calculate = starships.map((ship) => {
            const stops = calculateStops(
                searchValue,
                ship.MGLT,
                ship.consumables
            )
            return { ...ship, stops }
        })

        setSearchValue(searchValue)
        setStarships(calculate)
        setIsVisible(false)
    }

    useEffect(() => {
        api.get('/starships').then((response) =>
            setStarships(response.data.results)
        )
    }, [])

    console.log(starships)
    return (
        <DashboardWrapper>
            <Content>
                {isVisible ? (
                    <>
                        <SearchBar
                            value={searchValue}
                            onchange={(event) => {
                                onchange(event)
                            }}
                            onClick={handleSearchButton}
                        />
                    </>
                ) : (
                    <>
                        <span>
                            Distance:
                            {new Intl.NumberFormat('pt-BR', {}).format(
                                searchValue
                            )}{' '}
                            MGLT's
                        </span>
                        <Cards>
                            {starships.map((item) => (
                                <Card key={item.name}>
                                    <div className="card-item">
                                        <p>Name: {item.name}</p>
                                        <p>Model: {item.model}</p>
                                        <p>
                                            Hyperdrive: {item.hyperdrive_rating}
                                        </p>
                                        <p>
                                            Starship class:
                                            {item.starship_class}
                                        </p>
                                        <p>MGLT: {item.MGLT}</p>
                                        <p>Consumables: {item.consumables}</p>
                                        <p>Nº Stops: {item.stops}</p>
                                    </div>
                                </Card>
                            ))}
                        </Cards>
                    </>
                )}
            </Content>
        </DashboardWrapper>
    )
}

export default Dashboard
