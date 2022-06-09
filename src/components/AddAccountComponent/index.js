import React,{useState, useEffect} from 'react'
import FloatingButton from '../ActionComponent/FloatingButton'
import { useNavigation } from '@react-navigation/native'
import { setSecretKeyUserData } from '../../redux/Actions/SecretKeyActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AddAccountInputFields from './AddAccountInputFields'
const AddAccountComponent = (props) => {
    const {navigate} = useNavigation();
    const [form, setForm] = useState({})
    const [error,setError] = useState({})
    const onChange = ({name,value}) =>{
        setForm({...form,[name]:value})
        if(value !==''){
            // if(name==='password'){
            //     if(value.length<6){
            //         setError((prev)=>({...prev, [name]:"The password must be greter than 5 characters"}))
            //     }
            //     else{
            //         setError((prev)=>({...prev,[name]:null}))
            //     }
            // }
            // else{
            //     setError((prev)=>({...prev,[name]:null}))
            // }
            if(name==='secret_key'){
              console.log('inside secrete')
              if(!value.match(/^[A-Z2-7]+=*$/)){
                // /^([a-z0-9]{5,})$/
              console.log('inside secrete if')

                setError((prev)=>({...prev, secret_key:"The Secret key must be base32"}))
                return;
              }
              else{
              console.log('inside secrete else')

                setError((prev)=>({...prev,[name]:null}))
              }
            }
            setError((prev)=>({...prev,[name]:null}))

        }
        else{
            setError((prev)=>({...prev, [name]:"This field is required"}))
        }
    }
    const onSubmit = () =>{
        if(!form.secret_key){
            setError((prev)=>({...prev, secret_key:"Please Provide Secret Code"}))
            // return;
        }
        if(!form.application_name){
          setError((prev)=>({...prev, application_name:"Please Provide Application Name"}))
            // return;
        }
        if(!form.company_name){
          setError((prev)=>({...prev, company_name:"Please Provide Company Name"}))
            // return;
        }
        // props.setSecretKeyUserData(form)
        if(form.secret_key == null || !form.secret_key.match(/^[A-Z2-7]+=*$/))return
        if(form.application_name == null) return
        if(form.company_name == null) return
        // secreteDispatch(setSecreteCode(form.secretCode));
        props.setSecretKeyUserData(form)
        setForm({})
        setError({})
        navigate("Home")
    }
    useEffect(() => {
        return () => {
            console.log(form,error)
        }
    },[])
  return (
      <>
    <AddAccountInputFields 
        form = {form}
        error = {error}
        onSubmit = {onSubmit}
        onChange = {onChange}
    />
    <FloatingButton/>
    </>
  )
}
const mapDispatchToProps = dispatch =>({
  ...bindActionCreators({setSecretKeyUserData},dispatch)
})
const mapStateToProps = state =>({

})
export default connect(mapStateToProps, mapDispatchToProps)(AddAccountComponent)