class FeaturedProjects extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let image = e("img", {
            src: this.props.icon,
            style: {
                height: "45px",
                borderRadius: "3px"
            },
            key: 0
        })

        let title = e("h1", {
            style: {
                width: "100%",
                margin: 0,
                textAlign: "center",
                color: "#1B264F"
            },
            key: 1
        }, this.props.name)
        
        var divStyling = {
            display: "flex",
            alignItems: "center",
            width: "175px",
            borderStyle: "solid",
            borderColor: "lightgray",
            borderWidth: "0px",
            borderRadius: "5px",
            boxShadow: "5px 10px 18px rgba(0,0,0,0.4)",
            padding: "3px",
            marginBottom: "20px",
            marginRight: "10px",
            marginleft: "10px",
        }

        return e("div", {
            style: divStyling,
        }, [image, title])
    }
}