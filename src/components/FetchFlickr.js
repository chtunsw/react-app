import React from 'react'
import Axios from 'axios'
import Card from './Card'

class FetchFlickr extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tag: '',
            data: null
        }
    }

    handleClick = async () => {
        try {
            const response = await Axios.get('https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?tags=cat&format=json&nojsoncallback=true')
            this.setState({data : response.data})
        } catch(err) {
            console.log('error')
        }
    }

    getImgs = () => {
        return(
            <div>
                {this.state.data.items.map((item,index) => {
                        console.log(item)
                        return index < 10 && <Card key={index} cardInfo = {{title:item.title, subTitle:'', content:'', img: item.media.m}} />
                    })
                }
            </div>
        )
    }

    updateInput = (e) => {
        this.setState({tag: e.target.value})
    }

    render() {
        return(
            <div>
                <input onChange={this.updateInput} placeholder='input a tag'/>
                <button onClick={this.handleClick}>feed flickr</button>
                {this.state.data && this.getImgs()}
            </div>
        )
    }
}

export default FetchFlickr;