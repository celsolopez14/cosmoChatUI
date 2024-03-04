const styles = {
    firstTitle:{
        fontFamily:'Satoshi, sans-seriff',
        fontWeight:700,
        fontSize:'20px',
        lineHeight:'24px',
        letterSpacing:'0em',
        textAlign:'left',
        marginLeft:1.2
    },
    seeAllBtn:{
        fontFamily:'Satoshi, sans-seriff',
        fontWeight:500,
        fontSize:'16px',
        lineHeight:'22px',
        letterSpacing:'0.2px',
        textAlign:'right',
        color:'#6949FF',
        textTransform: 'none', 

    },

    btn:{
        backgroundColor :'#6949FF', 
        boxShadow: '4px 8px 24px 0px #00CDBD40', 
        borderRadius:7, 
        marginLeft:'18px', 
        marginTop:'16px', 
        marginRight:'18px', 
        marginBottom:'16px',
        '&:hover, &:active':{
            backgroundColor :'#00AFAC'
        },
        '&:focus':{
            boxShadow:'none'
        }
    },
    btnTxt:{
        fontFamily: 'Urbanist, sans-seriff', 
        fontWeight:700, 
        fontSize:16, 
        textTransform: 'none', 
        padding:1, 
        paddingLeft:5, 
        paddingRight:5
    }

}

export default styles;