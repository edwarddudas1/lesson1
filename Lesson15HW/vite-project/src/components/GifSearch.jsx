import React from "react";

export default class GifSearch extends React.Component {
  state = {
    inputValue: "",
    gifs: [],
    keyword: this.props.defaultKeyword || "forest",
  };

  componentDidMount() {
    this.fetchGifs();
  }

  componentDidUpdate(prevState) {
    if (prevState.keyword !== this.state.keyword) {
      this.fetchGifs();
    }
  }

  fetchGifs = async (keyword) => {
    const APIKEY = "3oyS5pOSFwgGDOVpuUApL0rxPooECVK4";
    try {
      // const res = await fetch(
      //   https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}
      // );
      const endpoint = keyword
        ? https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${encodeURIComponent( keyword )}&limit=12
        : https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=12;

        const res = await fetch(endpoint)
      if (!res.ok) {
        throw new Error(`HTTP error, status: ${res.status}`);
      }
      const data = await res.json();
      this.setState({ gifs: data.data });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSearch = (e) => {
    e.preventDefault();
    console.log("check");
    const { inputValue } = this.state;
    if (inputValue.trim()) {
      this.fetchGifs(inputValue);
    }
  };

  render() {
    const { inputValue, gifs } = this.state;
    return (
      <>
        <form onSubmit={this.handleSearch}>
          <h1>Gif Search Component</h1>
          <input
            type="search"
            value={inputValue}
            onChange={this.handleChange}
          />
          <button>Search</button>
        </form>

        <div>
          {gifs.map((gif) => (
            <img
              src={gif.images.fixed_height_downsampled.url}
              alt={gif.title}
              key={gif.id}
            />
          ))}
        </div>
      </>
    );
  }
}