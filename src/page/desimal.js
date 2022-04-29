import React from 'react'

export default class Desimal extends React.Component {
    constructor() {
        super()
        this.state = ({
            desimal: "",
            konversi: "",
            hasil: ""
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let desimal = this.state.desimal
        let konversi = this.state.konversi 

        let dcml = Number(desimal)
        let jumlah;
        
        if (konversi === "biner") {
            jumlah = dcml.toString(2)
        } else if (konversi === "oktal") {
            jumlah = dcml.toString(8)
        } else if (konversi === "hexadesimal") {
            jumlah = dcml.toString(16).toUpperCase()
        }

        this.setState({
            hasil: jumlah
        })
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="card">
                    <div className="card-header bg-secondary text-light">
                        <h2 className="text-center">Konversi Bilangan Desimal</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row mt-3">
                                <div className="col-4">
                                    <p>Desimal</p>
                                </div>
                                <div className="col-8">
                                    <input className="form-control" name="desimal" type="number" value={this.state.desimal} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-4">
                                    <p>Pilihan Konversi</p>
                                </div>
                                <div className="col-8">
                                    <select className="form-select" name="konversi" aria-label="Default select example" onChange={this.handleChange} required>
                                        <option></option>
                                        <option value="biner">Biner</option>
                                        <option value="oktal">Oktal</option>
                                        <option value="hexadesimal">Hexadesimal</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="w-100 btn btn-success mt-4 mb-3 text-light">Konversi</button>
                        </form>
                    </div>
                    <div className="card-footer">
                        <h2 className="text-center mb-3">Hasil</h2>
                        <button className="w-100 alert alert-success" name="result">{this.state.hasil}</button>
                    </div>
                </div>
            </div>
        )
    }
}