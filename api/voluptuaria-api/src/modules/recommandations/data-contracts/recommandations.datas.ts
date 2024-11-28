import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { PriceDatas } from "../../google-maps-place/data-contracts/price.datas"
import { CoordinatesDatas } from "../../google-maps-place/data-contracts/coordinates.datas"
import { CategoriesDatas } from "../../google-maps-place/data-contracts/categories.datas"
import { PlaceComments } from "./place-comments.datas"
import { WeatherDatas } from "../../openwheatermap/data-contracts/weather.datas"


/**
 * @brief Recommandations data-contracts
 */
export class RecommandationsDatas {
    @IsString({
        always: true,
    })
    @IsNotEmpty({
        always: true,
    })
    public prices: PriceDatas []

    @IsNotEmpty({
        always: true,
    })
    @IsString({
        always: true,
    })
    public name : string

    @IsBoolean()
    public is_opened_now : boolean

    public images : string[]

    public coordinates : CoordinatesDatas

    public categories : CategoriesDatas[]

    public callback_datas : object

    public comments : PlaceComments[]

    public weather : WeatherDatas[]

}


