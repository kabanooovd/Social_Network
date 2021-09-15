import React from "react";


type ProfileStatusT = {
    status: string
    updateStatusTC: (status: string) => void
}

// learning local state with no hooks like we did in TDL editable span but by using class component
class ProfileStatus extends React.Component<ProfileStatusT> {


    state = {
        editMode: false,
        status: this.props.status,
    }

    TurnSpanMode() {             // как в ф-ции создаем ф-ция const TurnSpanMode = () => {}, так в классе создаем метод
        this.setState({     // setState это метод который принимает все содержимое стейта
            editMode: true       // т.е объект со всеми данными можно переопределить именно в нем
        })                       // Но для этого надо сделать bind(this) при вызове ф-ции
    }                            // setState выполняется асинхронно

    TurnInputMode = () => {      // тут таже самая история
        this.setState({
            editMode: false
        })
        this.props.updateStatusTC(this.state.status)
    }

    onStatusChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }


    render() {                  // Метод render() содержит в себе то что дожен отрисовывать классовый компонент
        return (
            <div>
                <div>
                    {!this.state.editMode &&
                    <span onDoubleClick={ this.TurnSpanMode.bind(this) }>
                        {this.props.status || 'no status' }
                    </span>}
                </div>
                <div>
                    {this.state.editMode &&
                    <input type='text'
                           value={this.state.status}
                           onBlur={this.TurnInputMode}
                           autoFocus={true}
                           onChange={this.onStatusChange}
                    />}
                </div>
            </div>
        )
    }
}

export default ProfileStatus
















