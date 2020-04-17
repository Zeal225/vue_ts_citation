<template>
    <div class="loup-rech dis-n" id="conexion-icon">
        <div class="padding padding-membre">
            <span id="member-menu" class="bk-connexion"></span><span class="text-member">sign up <span class="or">or</span> login</span>
            <form>
                <input type="text" name="" id="x-loop" placeholder="votre speudo">
                <input type="text" name="" id="x-loop" placeholder="votre mot email">
                <input type="text" name="" id="x-loop" placeholder="votre mot de passe">
                <input type="text" name="" id="x-loop" placeholder="saisisez un nouveau mot de passe">
                <input type="text" name="" id="x-loop" placeholder="votre nom">
                <input type="text" name="" id="x-loop" placeholder="votre prenom">
                <input list="browsers" class="datalist" placeholder="selectionner votre pays" name="myBrowser" />
                <datalist id="browsers">
                    <option value="Afghanistan"></option>
                    <option value="Aland Islands"></option>
                    <option value="Albania"></option>
                </datalist>
                <div class="padding">
                    <input class="ex" type="submit" name="" id="x-sub" value="LOGIN">
                </div>
            </form>
        </div>
        <div class="padding">
            <button class="ex ex-sign-up-return" name="" id="x-sub" value="">sign up</button>
        </div>
    </div>
</template>

<script lang="ts">
    export default {}
</script>
