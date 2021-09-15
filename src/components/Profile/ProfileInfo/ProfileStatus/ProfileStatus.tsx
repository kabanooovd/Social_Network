import React from "react";


type ProfileStatusT = {
    status: string
}

// learning local state with no hooks like we did in TDL editable span but by using class component
class ProfileStatus extends React.Component<ProfileStatusT> {

    state = {
        editMode: false
    }

    TurnSpanMode() {             // как в ф-ции создаем ф-ция const TurnSpanMode = () => {}, так в классе создаем метод
        this.setState({     // setState это метод который принимает все содержимое стейта
            editMode: true       // т.е объект со всеми данными можно переопределить именно в нем
        })                       // Но для этого надо сделать bind(this) при вызове ф-ции
    }                            // setState выполняется асинхронно

    TurnInputMode() {            // тут таже самая история
        this.setState({
            editMode: false
        })
    }

    render() {                  // Метод render() содержит в себе то что дожен отрисовывать классовый компонент
        return (
            <div>
                <div>
                    {!this.state.editMode &&
                    <span onDoubleClick={ this.TurnSpanMode.bind(this) }>
                        {this.props.status}
                    </span>}
                </div>
                <div>
                    {this.state.editMode &&
                    <input type='text'
                           value={this.props.status}
                           onBlur={this.TurnInputMode.bind(this)}
                           autoFocus={true}
                    />}
                </div>
            </div>
        )
    }
}

export default ProfileStatus
















