<template>
    <div v-if="this.$store.getters.showNavBarConnexion" class="loup-rech" id="member-icon">
        <div class="padding padding-membre nav-not-hide">
            <span @click="showNavBarConnexion" id="member-menu" class="bk-connexion"></span><span class="text-member">sign up <span class="or">or</span> login</span>
            <form>
                <input type="text" name="" id="x-loop" placeholder="votre identifiant">
                <input type="text" name="" id="x-loop" placeholder="votre mot de passe">
                <label class="remember"><input type="checkbox" name="" id="" value=""> se souvenir de moi</label>
                <input class="ex" type="submit" name="" id="x-sub" value="LOGIN">
            </form>
        </div>
        <div class="padding">
            <button class="ex ex-sign-up" name="" id="x-sub" value="">sign up</button>
        </div>
    </div>
</template>

<script>
    export default {
      methods:{
        showNavBarConnexion(){
          this.$store.dispatch("showNavBarConnexion");
        }
      }
    }
</script>
