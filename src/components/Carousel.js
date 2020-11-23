import React, {Component} from 'react';
import CarouselItem from "./CarouselItem";
import '../styles/Carousel.css';


class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentCarouselItem : 1
        }
    }

    componentDidMount() {
        let firstCarouselItemClone = this.carouselItemsContainer.children[0].cloneNode(true);
        let lastCarouselItemClone = this.carouselItemsContainer.children[this.carouselItemsContainer.children.length - 1].cloneNode(true);

        this.carouselItemsContainer.insertBefore(lastCarouselItemClone, this.carouselItemsContainer.children[0]);
        this.carouselItemsContainer.append(firstCarouselItemClone);

        this.carouselItemsContainer.style.transitionDuration = "0.0s";
        this.carouselItemsContainer.style.transform = `translate(-${350}px)`;

    }

    handleNext = () => {
        if (this.state.currentCarouselItem < this.carouselItemsContainer.children.length - 1) {
            let newCurrentCarouselItem = this.state.currentCarouselItem + 1;

            this.setState({currentCarouselItem : newCurrentCarouselItem}, () => {
                this.carouselItemsContainer.style.transitionDuration = "0.5s";
                this.carouselItemsContainer.style.transform = `translate(-${350 * this.state.currentCarouselItem}px)`;

                if (this.state.currentCarouselItem === this.carouselItemsContainer.children.length - 1) {
                    setTimeout(() => {
                        this.carouselItemsContainer.style.transitionDuration = "0.0s";
                        this.carouselItemsContainer.style.transform = `translate(-${350}px)`;
                        this.setState({currentCarouselItem : 1})
                    },500)
                }
            } )
        }
        else {
            return ;
        }
    }

    handlePrevious = () => {
        if (this.state.currentCarouselItem > 0) {
            let newCurrentCarouselItem = this.state.currentCarouselItem - 1;

            this.setState({currentCarouselItem: newCurrentCarouselItem}, () => {
                this.carouselItemsContainer.style.transitionDuration = "0.5s";
                this.carouselItemsContainer.style.transform = `translate(-${350 * this.state.currentCarouselItem}px)`;

                if (this.state.currentCarouselItem === 0) {
                    setTimeout(() => {
                        this.carouselItemsContainer.style.transitionDuration = "0.0s";
                        this.carouselItemsContainer.style.transform = `translate(-${350 * (this.carouselItemsContainer.children.length - 2)}px)`;
                        this.setState({currentCarouselItem: this.carouselItemsContainer.children.length - 2})
                    }, 500)
                }
            })
        } else {
            return;
        }
    }

    render() {
        return (
            <div>
                <div className = 'parent__carouselItemsContainer'>
                    <div ref = {refId => this.carouselItemsContainer = refId} className = 'carouselItemsContainer'>
                        <CarouselItem imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png'/>
                        <CarouselItem imgSrc = 'https://www.seekpng.com/png/detail/80-803597_io-is-compatible-with-all-javascript-frameworks-and.png'/>
                        <CarouselItem imgSrc = 'https://webonrails.ru/wp-content/uploads/2018/09/babel_logo.png'/>
                        <CarouselItem imgSrc = 'https://wordpressify.ru/wp-content/uploads/2019/10/screen-shot-2017-10-11-at-6.png'/>
                    </div>
                </div>
                <div className='buttonsSwipe'>
                    <button onClick = {this.handlePrevious}> &lt; </button>
                    <button onClick = {this.handleNext}> &gt; </button>
                </div>
            </div>
        )
    }
};


export default Carousel;