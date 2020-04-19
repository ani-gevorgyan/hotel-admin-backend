exports.sendTokenResponse = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    console.log('------------------', token);

    const options = {
        expires: new Date(Date.now() + 999999),
        httpOnly: true
    }
    res
        .status(statusCode)
        .cookie('token', token, options)
        .json({
            success: true,
            token
        });


}